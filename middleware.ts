import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
    locales,
    defaultLocale,
});

export const config = {
    matcher: [
        // Match all pathnames except those starting with _next, api routes, or static assets
        '/((?!_next|api|.*\\..*).*)',
    ],
};
