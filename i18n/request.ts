import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async (ctx: any) => {
    // Try to get locale from context
    let locale = ctx.locale;

    // If not available, use default locale
    if (!locale || typeof locale !== 'string' || !locales.includes(locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../locales/${locale}/common.json`)).default
    };
});