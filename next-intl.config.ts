import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  locale: locale || "uz",
  messages: (await import(`./src/locales/${locale || "uz"}.json`)).default,
}));
