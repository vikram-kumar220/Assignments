let transactions :number [] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];
let credited:number [] = [];
let debited:number [] = [];
let j:number=0;
let k:number=0;
let total:number=0;
let debttotal:number =0;
for(let i:number=0;i<transactions.length;i++){
    if(transactions[i]!>0){
        credited[j] = transactions[i]!;
        j++;
    }
    else{
        debited[k] = transactions[i]!;
        k++;
    }   
}

console.log("credited:",credited);
console.log("debited:",debited);
console.log("Total No of credit transactionb "+credited.length);
console.log("Total No of Debit transactionb "+debited.length);
for(let sum of credited){
    total+=sum
}
console.log("Total amount credited:",total);
for(let sum of debited){
    debttotal+=sum
}
console.log("Total amount debited:",debttotal);

let totalAmount  = total+debttotal;
console.log("Total amount remaining:",totalAmount);
let credsuspicious:number =0;
for(let i:number =0;i<transactions.length;i++){
    if(transactions[i]!>=10000 ){
        credsuspicious++;
        console.log("SuspiciousTransaction amount:",transactions[i]!);

    }
       }
       console.log("No of Credit Suspicious Transaction:",credsuspicious);
let debitSuspicuous:number =0;
let f :number =0;
for(let i:number =0;i<transactions.length;i++){
    if(transactions[i]!<=-10000 ){
        
        debitSuspicuous++;
        console.log("Suspicious debit Transaction amount:",transactions[i]!);
    }
    
}
console.log("Debit Suspicious Transaction amount:",debitSuspicuous);

console.log("total suspicuous transactions:",credsuspicious+debitSuspicuous);
