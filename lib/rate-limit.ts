// Simple in-memory rate limiter
// In production, use Redis or similar for distributed rate limiting
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
    maxRequests: 5, // 5 requests
    windowMs: 15 * 60 * 1000, // per 15 minutes
};

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const record = requestCounts.get(ip);

    if (!record || now > record.resetTime) {
        requestCounts.set(ip, {
            count: 1,
            resetTime: now + RATE_LIMIT.windowMs,
        });
        return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1, resetTime: now + RATE_LIMIT.windowMs };
    }

    if (record.count >= RATE_LIMIT.maxRequests) {
        return { allowed: false, remaining: 0, resetTime: record.resetTime };
    }

    record.count++;
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count, resetTime: record.resetTime };
}

export function getClientIp(headers: Headers): string {
    // Check for forwarded IP from reverse proxies (Vercel, Cloudflare, etc.)
    const forwarded = headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    const realIp = headers.get('x-real-ip');
    if (realIp) {
        return realIp;
    }

    return 'unknown';
}
