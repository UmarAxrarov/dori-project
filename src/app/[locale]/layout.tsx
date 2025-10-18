// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { MainLayout } from "@/layout";
import "../../styles/globals.css";
import type { LayoutProps } from "next/app"; 

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const locale = (params as { locale: string }).locale;

  let messages: Record<string, any>;
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
