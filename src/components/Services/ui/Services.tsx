"use client";

import { WrapperSection } from "@/components/WrapperSection";
import { serviceData } from "../data/servieData";
import { Locale } from "@/i18n/settings";
import { useTranslation } from "@/i18n/client";

export const Services = ({ lang }: { lang: Locale }) => {
  const { t } = useTranslation(lang);
  return (
    <WrapperSection
      link="services"
      title={t("services")}
      desc={t("servicesDesc")}
    >
      <div className="grid md:grid-cols-2 shadow-inner w-full p-4 rounded-lg lg:grid-cols-3 gap-6 items-start text-white">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col shadow-lg ${
              service.id === 1 ||
              service.id === 4 ||
              service.id === 5 ||
              service.id === 8
                ? "md:col-span-2 md:bg-gradient-to-br from-blue-500 from-70%  via-blue-700 to-blue-900"
                : ""
            }   bg-gradient-to-tl from-blue-500 via-blue-700 to-blue-900  from-70% h-full rounded-md p-4 gap-2 items-start justify-start`}
          >
            <h3 className="font-bold  text-xl md:text-2xl">
              {t(service.title)}
            </h3>
            <h4 className="font-bold text-lg md:text-xl">
              {t(service.subTitle)}
            </h4>
            <ul className="text-lg">
              {service.list.map((desc) => (
                <li key={desc}>{t(desc)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WrapperSection>
  );
};
