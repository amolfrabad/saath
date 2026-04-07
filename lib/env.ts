// Validate environment variables on startup
export function validateEnv() {
    const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];
    const missing = required.filter((env) => !process.env[env]);

    if (missing.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missing.join(', ')}\nPlease set these in your .env.local file.`
        );
    }
}

export const ENV = {
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10),
    SMTP_SECURE: process.env.SMTP_SECURE === 'true',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'hello@noonealone.com',
    FROM_EMAIL: process.env.FROM_EMAIL || 'noreply@noonealone.com',
    APP_NAME: 'noOneAlone',
} as const;
