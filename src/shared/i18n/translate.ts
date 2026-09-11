import { locales } from "../../../astro.config.mjs";

export type SupportedLocale = typeof locales[number];

export interface I18N<T> extends Record<SupportedLocale, T> {}

export function translate<T>(translations: I18N<T>, locale: SupportedLocale): (key: keyof T & string) => string {
    return function (key: keyof T & string): string {
        const keys = key.split('.');
        let value: any = translations[locale] || translations['en'];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    }
}