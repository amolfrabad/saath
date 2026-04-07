import '../global.css';
import IntlProvider from '../../components/IntlProvider';
import { getMessages } from 'next-intl/server';
import { locales } from '../../i18n/config';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <IntlProvider messages={messages} locale={locale}>
            {children}
        </IntlProvider>
    );
}