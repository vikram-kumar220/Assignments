function loanApplication(customerName: string , creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number, ):void {
if(creditScore>=750){
console.log("Loan Approved");
}
else if(creditScore<750 && creditScore>=650) //&& income>=50000 && isEmployed==true && debtToIncomeRatio<=40)
{
console.log("Additional checks required");

    if(income>=50000){
        if(isEmployed==true){
            if(debtToIncomeRatio<=40){
                console.log("Loan Approved thorugh additional checks");
            }
            else{
                console.log("Loan Declined");
            }
        }
        else{
            console.log("Loan Declined");
        }
    }
}
else{
console.log("Loan Declined");

}
}
loanApplication("John Doe", 777, 55000.0, true, 35);

