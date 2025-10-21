import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { MainLayout } from "@/layout";
import "../../styles/globals.css";

interface Params {
  locale: string;
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<Params>;
}

export const metadata = {
  title: "Baby Metabol",
  description: "Biologik faol oziq-ovqat qo‘shimchasi bo‘yicha qo‘llanma, vitaminlar",
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
<html lang={locale}>
  <head>
    <link rel="cononical" href={`https://ustarvit.uz/${locale}`} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Baby Metabol",
          headline: "Baby Metabol – Biologik faol oziq-ovqat qo‘shimchasi bo‘yicha qo‘llanma, vitaminlar",
          description: "Biologik faol oziq-ovqat qo‘shimchasi bo‘yicha qo‘llanma, vitaminlar",
          url: `https://ustarvit.uz/${locale}`,
        }),
      }}
    />
  </head>
  <body>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MainLayout locale={locale}>{children}</MainLayout>
    </NextIntlClientProvider>
  </body>
</html>

  );
}
