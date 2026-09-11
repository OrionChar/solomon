import { type I18N } from "../../../../shared/i18n"

interface Translations {
    title: string,
    story: string,
}

export interface BudgetNames {
    largeHadronCollider: string,
    apolloProgram: string,
    fromThePrincess: string,
    fromEagle: string,
    internationalSpaceStation: string,
    airbusA380: string,
    humanGenomeProject: string,
    covid19Vaccine: string,
    manhattanProject: string,
}

export const translations: I18N<Translations & BudgetNames> = {
    en: {
        title: 'The Price of The War',
        story: 'Once upon a time, a warrior named Cossack Mamai clashed with the enormous bear. Probably, it was the biggest bear that has ever existed. Overwhelmed by its colossal stature, Mamai begs princess Europa, the daughter of Agenor, and her steadfast companion Eagle, to lend their aid in resisting the wrath of nature. In exchange for their valiant efforts, he vowed to deliver the hide of the beast. Europa and Eagle consented to this perilous endeavor. But they paid too dearly for this battle: none of the peaceful initiatives cost as much as this struggle against the ferocious ursine adversary.',
        largeHadronCollider: 'Large Hadron Collider',
        apolloProgram: 'Apollo Program (1-17)',
        fromThePrincess: 'from the princess',
        fromEagle: 'from Eagle',
        internationalSpaceStation: 'International Space Station',
        airbusA380: 'Airbus A380',
        humanGenomeProject: 'Human Genome Project',
        covid19Vaccine: 'COVID-19 Vaccine',
        manhattanProject: 'Manhattan Project',
    },
    ru: {
        title: 'Война: чего она стоит',
        story: 'Однажды Казак Мамая схлестнулся в ожесточенной битве с гигантским бурым медведем. Наверное, самым большим из когда-либо существовавших. И дабы уровнять свои силы перед природным воплощением ярости, Мамая просит помощи у принцессы Европы, дочери Агенора, и орла, её верного друга, обещая взамен шкуру зверя. Принцесса и птица согласились, но за эту битву они заплатили слишком много: ни одна мирная инициатива не стоила так дорого, как сражение с медведем.',
        largeHadronCollider: 'Большой адронный коллайдер',
        apolloProgram: 'Космическая программа Аполон (1-17)',
        fromThePrincess: 'от принцессы',
        fromEagle: 'от орла',
        internationalSpaceStation: 'Международная космическая станция',
        airbusA380: 'Airbus A380',
        humanGenomeProject: 'Проект «Геном человека»',
        covid19Vaccine: 'Вакцина COVID-19',
        manhattanProject: 'Манхеттенский проект',
    }
}


