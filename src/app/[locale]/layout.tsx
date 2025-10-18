import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { MainLayout } from "@/layout";
import "../../styles/globals.css";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
    
  } catch {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainLayout locale={locale}>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
