import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import { kumlien, proximaNova } from '@/fonts';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import './globals.scss';

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html
        lang={locale}
        className={`${kumlien.variable} ${proximaNova.variable}`}
      >
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
