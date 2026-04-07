'use client';

import { useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';

export default function IntlProvider({
    children,
    messages,
    locale
}: {
    children: React.ReactNode;
    messages: any;
    locale: string;
}) {
    useEffect(() => {
        // Set html lang attribute on the client side
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    );
}