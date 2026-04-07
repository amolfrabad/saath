import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema, escapeHtml, textToHtml } from '@/lib/validation';
import { ENV } from '@/lib/env';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

// Create SMTP transporter
function createTransporter() {
    return nodemailer.createTransport({
        host: ENV.SMTP_HOST,
        port: ENV.SMTP_PORT,
        secure: ENV.SMTP_SECURE,
        auth: {
            user: ENV.SMTP_USER,
            pass: ENV.SMTP_PASS,
        },
    });
}

export async function POST(req: NextRequest) {
    try {
        // Validate required environment variables
        const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
        const missingEnv = requiredEnv.filter((env) => !process.env[env]);

        if (missingEnv.length > 0) {
            console.error('Missing SMTP environment variables:', missingEnv);
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact support.' },
                { status: 500 }
            );
        }

        if (!ENV.CONTACT_EMAIL) {
            console.error('Missing CONTACT_EMAIL environment variable');
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact support.' },
                { status: 500 }
            );
        }

        const clientIp = getClientIp(req.headers);
        const rateLimitCheck = checkRateLimit(clientIp);

        if (!rateLimitCheck.allowed) {
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again later.',
                    retryAfter: Math.ceil((rateLimitCheck.resetTime - Date.now()) / 1000),
                },
                { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimitCheck.resetTime - Date.now()) / 1000)) } }
            );
        }

        // Parse and validate request body
        const body = await req.json();

        // Validate using Zod schema
        const validationResult = contactFormSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: 'Validation failed',
                    issues: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, email, topic, message } = validationResult.data;

        // Escape HTML to prevent XSS attacks
        const safeName = escapeHtml(name);
        const safeMessage = escapeHtml(message);
        const safeTopic = escapeHtml(topic);

        const adminEmailHtml = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Topic:</strong> ${safeTopic}</p>
            <p><strong>Message:</strong></p>
            <p>${textToHtml(safeMessage)}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;"><em>Reply to: ${escapeHtml(email)}</em></p>
            <p style="font-size: 12px; color: #666;"><em>IP Address: ${escapeHtml(clientIp)}</em></p>
        `;

        const userEmailHtml = `
            <h2>Thank You for Reaching Out!</h2>
            <p>Hi ${safeName},</p>
            <p>We've received your message and appreciate you getting in touch. A companion will review your inquiry and get back to you within 24 hours with next steps and available time slots.</p>
            <p>In the meantime, if you need immediate support, feel free to chat with us on WhatsApp.</p>
            <p><strong>Your Message:</strong></p>
            <blockquote style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #5aa2d5; margin: 15px 0;">
                <p><strong>Topic:</strong> ${safeTopic}</p>
                <p><strong>Message:</strong></p>
                <p>${textToHtml(safeMessage)}</p>
            </blockquote>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">Warm regards,<br><strong>${ENV.APP_NAME} Team</strong></p>
        `;

        // Create transporter and send emails
        const transporter = createTransporter();

        // Send email to admin/support team
        const adminEmailPromise = transporter.sendMail({
            from: `${ENV.APP_NAME} <${ENV.FROM_EMAIL}>`,
            to: ENV.CONTACT_EMAIL,
            subject: `New Contact Form Submission: ${safeTopic}`,
            html: adminEmailHtml,
            replyTo: email,
        });

        // Send confirmation email to user
        const userEmailPromise = transporter.sendMail({
            from: `${ENV.APP_NAME} <${ENV.FROM_EMAIL}>`,
            to: email,
            subject: `We Received Your Message – ${ENV.APP_NAME}`,
            html: userEmailHtml,
        });

        // Send both emails in parallel
        await Promise.all([adminEmailPromise, userEmailPromise]);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
