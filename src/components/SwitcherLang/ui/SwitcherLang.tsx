"use client";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { Locale, languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n/client";

export const SwitcherLang = ({ lng }: { lng: Locale }) => {
  const { t } = useTranslation(lng, "SwitcherLang");
  return (
    <div>
      <Trans className="text-black" i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span className="text-black" key={l}>
              {index > 0 && " or "}
              <Link className="text-blue-link" href={`/${l}`}>
                {l}
              </Link>
            </span>
          );
        })}
    </div>
  );
};
