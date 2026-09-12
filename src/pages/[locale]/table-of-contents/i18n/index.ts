import { type I18N } from "../../../../shared/i18n";

interface Translations {
    pageTitle: string,
    epigraph: string,
    prologue: string
}

const translations: I18N<Translations> = {
    en: {
        pageTitle: 'Table of Contents',
        epigraph: '"Nothing is True — Everything is Permitted"',
        prologue: 'Prologue'
    },
    ru: {
        pageTitle: 'Содержание',
        epigraph: '«Ничто не истинно — всё дозволено»',
        prologue: 'Пролог'
    },
}

export {translations}