function loanApplication(customerName: string , creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number, ):void {
if(creditScore>=750){
console.log("Loan Approved");
}
else if(creditScore<750 && creditScore>=650 && income>=50000 && isEmployed==true && debtToIncomeRatio<=40){
console.log("Loan Approved");
}
else{
console.log("Loan Declined");

}
}
loanApplication("John Doe", 723, 55000.0, true, 48);

