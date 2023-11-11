import { SwitcherLang } from "@/components/SwitcherLang";
import { Locale } from "@/i18n/settings";
import Image from "next/image";
import { Suspense } from "react";

export const Navbar = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="w-full flex items-center h-20 justify-center shadow-sm sticky top-0 z-50 bg-gray-50 px-4">
      <div className="flex items-center container justify-between   ">
        <Image src="/logo.png" alt="logo" width={300} height={60} />
        <p></p>
        <Suspense fallback={""}>
          <SwitcherLang lng={lang} />
        </Suspense>
      </div>
    </nav>
  );
};
