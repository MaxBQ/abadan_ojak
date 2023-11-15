/* eslint-disable @next/next/no-img-element */
"use client";
import { Delivery } from "./Delivery";
import { aboutData } from "../data/aboutData";
import { CustomerService } from "./CustomerService";
import { WrapperSection } from "@/components/WrapperSection";
import { Locale } from "@/i18n/settings";
import { useTranslation } from "@/i18n/client";
export const AboutUs = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);

  return (
    <WrapperSection link="about" title={t("about")} desc={t("aboutDesc")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center w-full">
        {aboutData.map((about) => (
          <Delivery
            key={about.id}
            src={about.src}
            alt={about.alt}
            srcIcon={about.srcIcon}
            altIcon={about.altIcon}
            desc={t(about.desc)}
          />
        ))}
      </div>
      <CustomerService t={t} />
    </WrapperSection>
  );
};
