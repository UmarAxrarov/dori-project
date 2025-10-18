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

// SEO metadata
export const metadata = {
  title: "Baby Metabol – Bosh sahifa",
  description: "Baby Metabol sahifa – bu Baby Metabol vitaminlar va sog'liq haqida ma'lumotlar bilan tanishish joyi.",
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
        {/* JSON-LD для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Baby Metabol",
              description: "Baby Metabol sahifa – bu Baby Metabol vitaminlar va sog'liq haqida ma'lumotlar bilan tanishish joyi.",
              url: "https://dori-project-w8l5.vercel.app/",
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
