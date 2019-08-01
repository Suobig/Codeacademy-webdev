export let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export function getCadre(salary) {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export function calculateTax(salary) {
  return payGrades[getCadre(salary)].taxMultiplier * salary;
}

export function getBenefits(salary) {
  return payGrades[getCadre(salary)].benefits.join(', ');
}

export function calculateBonus(salary) {
  return .02 * salary;
}

export function reimbursementEligibility(salary) {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre(salary)].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export function getEmployeeInformation(salary) {
  return `
Current salary: ${salary}</br>
Cadre: ${getCadre(salary)}</br>
Tax: ${calculateTax(salary)}</br>
Benefits: ${getBenefits(salary)}</br>
Bonus: ${calculateBonus(salary)}</br>
Reimbursement Eligibility: ${reimbursementEligibility(salary)}
  `;
}