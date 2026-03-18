let scorearr :number [] = [12,2,4,1,6,9,3,7,5];
//find the lowset no
let lowest :number =scorearr[0]!;  
let lowsetindex :number =0;  

let highestindex :number =0;
let lastindex :number =scorearr.length-1;
for(let i:number=0;i<scorearr.length;i++){
    if(scorearr[i]!<lowest){
        lowest=scorearr[i]! ;
        
        lowsetindex =i;
    }   

}

let highest :number =scorearr[lowsetindex]!;
if(lowest===scorearr[lastindex] && lowsetindex===lastindex){
    console.log("No profit");
   
}
else {
for(let i:number=lowsetindex;i<scorearr.length;i++){
    if(scorearr[i]!>highest){
        highest=scorearr[i]! ;
        highestindex =i;
    }

}
console.log("The profit is "+(highest-lowest));
}

// console.log("The lowest score is "+lowest);
// console.log("The day with lowest score is "+lowsetindex+1);
// console.log("The highest score is "+highest);
// console.log("The highest score index is "+highestindex);
