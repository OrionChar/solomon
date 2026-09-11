import { type BudgetNames } from "../../i18n";

export interface MegaprojectBudget {
    budget: number,
    legendKey?: keyof BudgetNames
}

const megaprojectBudgets: Array<MegaprojectBudget | MegaprojectBudget[]> = [
    { budget: 7, legendKey: 'largeHadronCollider' },
    { budget: 320, legendKey: 'apolloProgram' },
    [
        { budget: 69, legendKey: 'fromThePrincess' },
        { budget: 128 },
        { budget: 130, legendKey: 'fromEagle' },
    ],
    { budget: 220, legendKey: 'internationalSpaceStation' },
    { budget: 37, legendKey: 'airbusA380' },
    { budget: 6, legendKey: 'humanGenomeProject' },
    { budget: 130, legendKey: 'covid19Vaccine' },
    { budget: 27, legendKey: 'manhattanProject' },
]

function calcTotalBudget(megaprojects: MegaprojectBudget[]) {
    return megaprojects.reduce((acc, currentMegaproject) => {
        return (acc += currentMegaproject.budget);
    }, 0);
}

export { megaprojectBudgets, calcTotalBudget }