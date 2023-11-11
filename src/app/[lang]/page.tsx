import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";
import { Suspense } from "react";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="flex flex-col items-center relative">
      <Navbar lang={lang} />
      <Suspense fallback={""}>
        <Hero />
      </Suspense>
      <div className="container bg-gray-50 px-4">
        <Suspense fallback={""}>
          <AboutUs />
        </Suspense>
      </div>
    </main>
  );
}
