let paragraph:string ="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let serachword:string ="Java";
let count:number =0;
const splitText =paragraph.split(" ");
for(let i=0;i<splitText.length;i++){
    if(splitText[i]===serachword){
        count++;
        console.log("The word "+serachword+" occurs at index "+i);
       
    }
}
console.log("The word "+serachword+" occurs "+count+" times in the paragraph.");

