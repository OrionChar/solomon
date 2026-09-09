export interface MegaprojectBudget {
    budget: number,
    legend?: string
}

const megaprojectBudgets: Array<MegaprojectBudget | MegaprojectBudget[]> = [
    { budget: 7, legend: 'Large Hadron Collider' },
    { budget: 320, legend: 'Apollo Program (1-17)' },
    [
        { budget: 69, legend: 'from the princess' },
        { budget: 128 },
        { budget: 130, legend: 'from Eagle' },
    ],
    { budget: 220, legend: 'International Space Station' },
    { budget: 37, legend: 'Airbus A380' },
    { budget: 6, legend: 'Human Genome Project' },
    { budget: 130, legend: 'COVID-19 Vaccine' },
    { budget: 27, legend: 'Manhattan Project' },
]

function calcTotalBudget(megaprojects: MegaprojectBudget[]) {
    return megaprojects.reduce((acc, currentMegaproject) => {
        return (acc += currentMegaproject.budget);
    }, 0);
}

export { megaprojectBudgets, calcTotalBudget }