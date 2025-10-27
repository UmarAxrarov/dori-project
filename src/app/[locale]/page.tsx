import Home from "@/components/Home";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "uz" }, { locale: "ru" }];
}

export default function Page() {
  return <Home />;
}
