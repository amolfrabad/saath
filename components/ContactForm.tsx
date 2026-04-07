'use client';

import { useState } from 'react';
import { contactFormSchema } from '@/lib/validation';
import type { ContactFormData } from '@/lib/validation';

interface ContactFormProps {
    contactEmail?: string;
}

interface FormErrors {
    [key: string]: string[];
}

export default function ContactForm({ contactEmail = 'noonealone@zohomail.in' }: ContactFormProps) {
    const [formData, setFormData] = useState<Partial<ContactFormData>>({
        name: '',
        email: '',
        topic: '',
        message: '',
        honeypot: '',
    });
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors((prev) => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Clear previous errors
        setFieldErrors({});
        setGeneralError(null);
        setSuccess(false);

        // Validate using Zod schema
        const validationResult = contactFormSchema.safeParse(formData);

        if (!validationResult.success) {
            const errors = validationResult.error.flatten().fieldErrors;
            setFieldErrors(errors);
            setGeneralError('Please fix the errors above and try again.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(validationResult.data),
            });

            let data;
            try {
                data = await response.json();
            } catch (parseError) {
                console.error('Failed to parse response:', parseError);
                console.error('Response status:', response.status);
                console.error('Response text:', await response.text());
                throw new Error(`Server responded with status ${response.status}`);
            }

            if (response.ok) {
                setSuccess(true);
                setGeneralError(null);
                setFieldErrors({});
                setSuccessMessage('✓ Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    topic: '',
                    message: '',
                    honeypot: '',
                });
                // Auto-hide success message after 6 seconds
                setTimeout(() => setSuccess(false), 6000);
            } else if (response.status === 429) {
                setGeneralError('Too many requests. Please wait a few minutes before trying again.');
            } else {
                setGeneralError(data.error || 'Failed to send email. Please try again.');
            }
        } catch (error) {
            setGeneralError('Network error. Please check your connection and try again.');
            console.error('Form submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3 className="font-semibold mb-3 text-lg">Contact Form</h3>
            <p className="text-sm text-gray-600 mb-4">
                Fill in a few details and we&apos;ll get back to you within 24 hours. Your information
                is kept private and is only used to respond to your enquiry.
            </p>

            {generalError && (
                <div
                    className="mb-4 rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
                    role="alert"
                    aria-live="polite"
                >
                    <span className="font-medium">Error:</span> {generalError}
                </div>
            )}

            {success && (
                <div
                    className="mb-4 rounded border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 transition-colors ${fieldErrors.name
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            }`}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600">
                            {fieldErrors.name[0]}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 transition-colors ${fieldErrors.email
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            }`}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">
                            {fieldErrors.email[0]}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                        Topic <span className="text-gray-400 text-xs">(optional)</span>
                    </label>
                    <select
                        id="topic"
                        name="topic"
                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                        value={formData.topic}
                        onChange={handleChange}
                    >
                        <option value="">Select a topic</option>
                        <option value="new-session">Book a new session</option>
                        <option value="regular-checkin">Regular check-in</option>
                        <option value="support-question">Question about support</option>
                        <option value="other">Something else</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={`w-full rounded border px-3 py-2 text-sm min-h-[120px] resize-vertical focus:outline-none focus:ring-1 transition-colors ${fieldErrors.message
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                            }`}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share anything you're comfortable sharing. This helps us understand how best to support you."
                        required
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    />
                    {fieldErrors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600">
                            {fieldErrors.message[0]}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading || success}
                    className={`btn-primary inline-flex items-center justify-center transition-all duration-200 ${loading || success
                        ? 'opacity-60 cursor-not-allowed'
                        : 'hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]'
                        }`}
                    aria-busy={loading}
                >
                    {loading ? (
                        <>
                            <span className="inline-block mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Sending...
                        </>
                    ) : success ? (
                        '✓ Sent'
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
}
