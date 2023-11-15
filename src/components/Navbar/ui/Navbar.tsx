import { SwitcherLang } from "@/components/SwitcherLang";
import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";
import Link from "next/link";
import { Suspense } from "react";

export const Navbar = async ({ lang }: { lang: Locale }) => {
  const { t } = await useTranslation(lang);

  return (
    <nav className="w-full flex items-center h-20 justify-center shadow-sm sticky top-0 z-50 bg-gray-50 px-4">
      <div className="flex items-center container justify-between   ">
        <div className="relative">
          <p className="font-medium text-7xl text-blue-500">O</p>
          <p className="absolute  top-0 left-2 m-auto font-light text-6xl text-blue-500">
            A
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-blue-500 gap-3">
            <Link href="#home">{t("home")}</Link>
            <Link href="#about">{t("about")}</Link>
            <Link href="#services">{t("services")}</Link>
            <Link href="#contacts">{t("contacts")}</Link>
          </div>
          <Suspense fallback={""}>
            <SwitcherLang lng={lang} />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};
