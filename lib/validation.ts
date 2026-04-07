import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .trim(),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .max(255, 'Email is too long'),
    topic: z
        .string()
        .max(50, 'Topic is too long')
        .optional()
        .default('general'),
    message: z
        .string()
        .min(1, 'Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(5000, 'Message must be less than 5000 characters')
        .trim(),
    honeypot: z
        .string()
        .max(0, 'Form submission rejected')
        .optional()
        .default(''),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Sanitize HTML entities to prevent XSS
export function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Convert plain text line breaks to HTML
export function textToHtml(text: string): string {
    return text.replace(/\n/g, '<br>');
}
