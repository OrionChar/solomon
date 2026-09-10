interface MegaprojectBudget {
    budget: number,
    legend?: string,
    reference?: string
}

const megaprojectBudgets: Array<MegaprojectBudget | MegaprojectBudget[]> = [
    { budget: 7, legend: 'Large Hadron Collider', reference: 'https://en.wikipedia.org/wiki/Large_Hadron_Collider' },
    { budget: 320, legend: 'Apollo Program (1-17)', reference: 'https://en.wikipedia.org/wiki/Apollo_program' },
    [
        { budget: 69, legend: 'from the princess', reference: 'https://www.eeas.europa.eu/delegations/united-states-america/eu-assistance-ukraine-us-dollars_en?s=253' },
        { budget: 128 },
        { budget: 130, legend: 'from Eagle', reference: 'https://usafacts.org/articles/how-much-money-has-the-us-given-ukraine-since-russias-invasion/' },
    ],
    { budget: 220, legend: 'International Space Station', reference: 'https://en.wikipedia.org/wiki/International_Space_Station' },
    { budget: 37, legend: 'Airbus A380', reference: 'https://en.wikipedia.org/wiki/Airbus_A380' },
    { budget: 6, legend: 'Human Genome Project', reference: 'https://en.wikipedia.org/wiki/Human_Genome_Project' },
    { budget: 130, legend: 'COVID-19 Vaccine', reference: 'https://www.businesswire.com/news/home/20210110005098/en/Governments-Spent-at-Least-%E2%82%AC93bn-on-COVID-19-Vaccines-and-Therapeutics-During-the-Last-11-Months' },
    { budget: 27, legend: 'Manhattan Project', reference: 'https://en.wikipedia.org/wiki/Manhattan_Project#Cost' },
]

function calcTotalBudget(megaprojects: MegaprojectBudget[]) {
    return megaprojects.reduce((acc, currentMegaproject) => {
        return (acc += currentMegaproject.budget);
    }, 0);
}

export { type MegaprojectBudget, megaprojectBudgets, calcTotalBudget }