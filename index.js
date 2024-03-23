function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const PAYE_THRESHOLD = 24000;
    const TAX_RATE_1 = 0.1;
    const TAX_RATE_2 = 0.25;
    const TAX_RATE_3 = 0.30;
    const TAX_RATE_4 = 0.325;
    const TAX_RATE_5  = 0.35
    const NHIF_RATE = 0.015;
    const NSSF_RATE = 0.06;

    // Calculating gross salary
    const grossSalary = basicSalary + benefits;

    // Calculating NHIF deductions
    const NHIFDeductions = grossSalary * NHIF_RATE;

    // Calculating NSSF deductions
    const NSSFDeductions = grossSalary * NSSF_RATE;

    // Calculating taxable income
    const taxableIncome = grossSalary - NHIFDeductions - NSSFDeductions - PAYE_THRESHOLD;

    // Calculating  payee (tax)
    let payee;
    if (taxableIncome <= 0) {
        payee = 0;
    } else if (taxableIncome <= 24000) {
        payee = taxableIncome * TAX_RATE_1;
    }
    else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        payee = taxableIncome * TAX_RATE_2;
    }
    else if (taxableIncome >= 32,334 && taxableIncome <= 500000) {
        payee = taxableIncome * TAX_RATE_3;
    }
    else if (taxableIncome >= 500001 && taxableIncome <= 800000) {
        payee = taxableIncome * TAX_RATE_4;
    }
    else if (taxableIncome >= 800000 ) {
        payee = taxableIncome * TAX_RATE_5;
    }
     else {
        console.log("needs further investication")
        
    }

    // Calculating net salary
    const netSalary = grossSalary - NHIFDeductions - NSSFDeductions - payee;

    // Return the calculating values
    return {
        grossSalary: grossSalary,
        NHIFDeductions: NHIFDeductions,
        NSSFDeductions: NSSFDeductions,
        payee: payee,
        netSalary: netSalary
    };
}

// getting the salary details including the deductions
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
