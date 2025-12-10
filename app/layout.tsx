
import './global.css';

export const metadata = {
  title: 'noOneAlone',
  description: 'You Talk. We Listen.',
  icons: {
    icon: '/favicon.ico', // or '/icon.png' if you prefer PNG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
