import { getRelativeLocaleUrlList } from "astro:i18n";
import type { SupportedLocale } from "./translate";

export function detectLocale() {
    return getRelativeLocaleUrlList().map((url) => ({
    params: { locale: url.replace(/\//g, '') as SupportedLocale},
  }));
}