import { type BudgetNames } from "../../i18n";

export interface MegaprojectBudget {
    budget: number,
    legendKey?: keyof BudgetNames,
    reference?: string
}

const megaprojectBudgets: Array<MegaprojectBudget | MegaprojectBudget[]> = [
    { budget: 7, legendKey: 'largeHadronCollider', reference: 'https://en.wikipedia.org/wiki/Large_Hadron_Collider' },
    { budget: 320, legendKey: 'apolloProgram', reference: 'https://en.wikipedia.org/wiki/Apollo_program' },
    [
        { budget: 69, legendKey: 'fromThePrincess', reference: 'https://www.eeas.europa.eu/delegations/united-states-america/eu-assistance-ukraine-us-dollars_en?s=253' },
        { budget: 128 },
        { budget: 130, legendKey: 'fromEagle', reference: 'https://usafacts.org/articles/how-much-money-has-the-us-given-ukraine-since-russias-invasion/' },
    ],
    { budget: 220, legendKey: 'internationalSpaceStation', reference: 'https://en.wikipedia.org/wiki/International_Space_Station' },
    { budget: 37, legendKey: 'airbusA380', reference: 'https://en.wikipedia.org/wiki/Airbus_A380' },
    { budget: 6, legendKey: 'humanGenomeProject', reference: 'https://en.wikipedia.org/wiki/Human_Genome_Project' },
    { budget: 130, legendKey: 'covid19Vaccine', reference: 'https://www.businesswire.com/news/home/20210110005098/en/Governments-Spent-at-Least-%E2%82%AC93bn-on-COVID-19-Vaccines-and-Therapeutics-During-the-Last-11-Months' },
    { budget: 27, legendKey: 'manhattanProject', reference: 'https://en.wikipedia.org/wiki/Manhattan_Project#Cost' },
]

function calcTotalBudget(megaprojects: MegaprojectBudget[]) {
    return megaprojects.reduce((acc, currentMegaproject) => {
        return (acc += currentMegaproject.budget);
    }, 0);
}

export { megaprojectBudgets, calcTotalBudget }