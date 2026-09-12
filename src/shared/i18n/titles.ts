import type { I18N } from "./translate";

interface Titles {
    thePriceOfTheWar: string
}

export const TITLES: I18N<Titles> = {
    en: {
        thePriceOfTheWar: 'The Price of The War'
    },
    ru: {
        thePriceOfTheWar: 'ВОЙНА: ЧЕГО ОНА СТОИТ'
    }
}