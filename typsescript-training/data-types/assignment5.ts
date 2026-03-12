interface Employee {
    employeeName: string;
    BaseSalary: number;
    employeeExperience: number;
    employeeRating: number;
}
const employees: Employee[] = [
  {  employeeName: "Alice Johnson", BaseSalary: 75000.0, employeeExperience: 5.1, employeeRating: 4.2 },
  {  employeeName: "Bob Smith",     BaseSalary: 68000.0, employeeExperience: 3.2, employeeRating: 3.8 },
  { employeeName: "Carol Davis",   BaseSalary: 82000.0, employeeExperience: 7.1, employeeRating: 4.5 },
  { employeeName: "David Brown",   BaseSalary: 90000.0, employeeExperience: 10.2, employeeRating: 2.5 },
  { employeeName: "Eva Green",     BaseSalary: 60000.0, employeeExperience: 2.4, employeeRating: 3.5 },
];


function variablepaypercentage(rating :number):number{
    if(rating>=4){
        return 15;
    }
    else if(rating>=3 && rating<4){
        return 10;
    }
    
    else{
        return 3;

    }
}
function calculateBonus(rating :number):number {
    if(rating>=4){
        return 1500;
    }
    else if(rating>=3 && rating<4){
        return 1200;
    }
    
    else{
        return 300;
    }
}
function calculateRewards(experience:number):number{
   return experience>=5?5000:0;
}

const hikeMap =new Map<string, number>();
for (const employee of employees) {
    const variablepercent = variablepaypercentage(employee.employeeRating);
    const bonus = calculateBonus(employee.employeeRating);
    const rewards = calculateRewards(employee.employeeExperience);
    const hike =(employee.BaseSalary*(variablepercent/100)) + bonus + rewards;
    const hikepercentage =hike/employee.BaseSalary*100;
    hikeMap.set(employee.employeeName, hikepercentage);
}
hikeMap.forEach((hikepercentage, employeeName) => {
    console.log(`Hike percentage for ${employeeName}: ${hikepercentage}%`);
});

console.log("Hike map execution completed.");

