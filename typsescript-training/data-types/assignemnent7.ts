let sentence:string ="Java programming is fun and challenging";
console.log(sentence);
const splitText =sentence.split(" ");
console.log("The Split Array is :",splitText);
console.log("The total No of Words is sentence are "+splitText.length);
let reversedSentenceArray:string[] =[];
let updatedArray:string[] =[];
for(let i:number =0;i<splitText.length;i++){
    let reversedvalue:string="";
   for(let j:number=splitText[i]!.length-1;j>=0;j--){
    reversedvalue +=splitText[i]![j];
   }
   //console.log(reversedvalue);
   reversedSentenceArray .push(reversedvalue);
}
console.log("Reversed Sentence Array is:",reversedSentenceArray);
//Convert the first character of each word to uppercase and print original sentence
let UpperCaseArray :String[] =[];
let result:string ="";
for (let i:number =0;i<splitText.length;i++){
let uppercase =splitText[i];
result+=uppercase!.charAt(0).toUpperCase()+uppercase!.slice(1)+" ";

}
  console.log(result); 
