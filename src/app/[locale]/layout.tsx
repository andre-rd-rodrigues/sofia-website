import "./globals.scss";
import Navbar from "@/components/Navbar";
import { dm_sans, libre } from "@/fonts";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale} className={`${dm_sans.variable} ${libre.variable}`}>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
