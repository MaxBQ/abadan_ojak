export const fallbackLng = "tm";
export const languages = [fallbackLng, "en", "ru"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export type Locale = (typeof languages)[number];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
