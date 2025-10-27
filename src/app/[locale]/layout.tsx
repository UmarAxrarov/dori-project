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
  description:
    "Biologik faol oziq-ovqat qo‘shimchasi bo‘yicha qo‘llanma, vitaminlar",
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
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
        <link rel="canonical" href={`https://ustarvit.uz/${locale}`} />

        <link rel="alternate" href="https://ustarvit.uz/uz" hrefLang="uz" />
        <link rel="alternate" href="https://ustarvit.uz/ru" hrefLang="ru" />

        <meta
          name="description"
          content={
            locale === "ru"
              ? "Биологически активная добавка Baby Metabol — витамины и руководство по применению. Улучшает обмен веществ и поддерживает здоровье ребёнка."
              : "Baby Metabol — biologik faol qo‘shimcha, vitaminlar va qo‘llanma. Bolaning sog‘lig‘ini qo‘llab-quvvatlaydi va metabolizmni yaxshilaydi."
          }
        />
        <meta
          name="keywords"
          content={
            locale === "ru"
              ? "Baby Metabol, витамины для детей, БАД, здоровье ребёнка, метаболизм"
              : "Baby Metabol, bolalar uchun vitaminlar, biologik faol qo‘shimcha, sog‘lom metabolizm"
          }
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name:
                locale === "ru"
                  ? "Baby Metabol"
                  : "Baby Metabol – Biologik faol qo‘shimcha",
              headline:
                locale === "ru"
                  ? "Baby Metabol – витамины и руководство по применению"
                  : "Baby Metabol – Biologik faol oziq-ovqat qo‘shimchasi bo‘yicha qo‘llanma, vitaminlar",
              description:
                locale === "ru"
                  ? "Информация о биологически активной добавке Baby Metabol: состав, преимущества, витамины и рекомендации по применению."
                  : "Biologik faol oziq-ovqat qo‘shimchasi Baby Metabol haqida ma'lumot: tarkibi, foydasi, vitaminlar va qo‘llanma.",
              url: `https://ustarvit.uz/${locale}`,
              inLanguage: locale,
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
