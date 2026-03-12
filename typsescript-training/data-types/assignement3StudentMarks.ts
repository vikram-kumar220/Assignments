let studentName: String[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];

for (let i:number= 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i]! + 10;
}
console.log("Updated Marks:", updatedMarks);

let total :number =0;
for(let sum of updatedMarks){
total += sum;

}
console.log("Updated Marks:");
for (let i = 0; i < studentName.length; i++) {
    console.log(studentName[i] + ": " + updatedMarks[i]);
}
console.log("Total Marks:", total);
let average = total / updatedMarks.length;
console.log("Average Marks:", average);
