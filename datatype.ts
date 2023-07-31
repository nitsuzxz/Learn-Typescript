let lname: string;

lname = "nitsu";

console.log(lname.toUpperCase());

let age: number;
age = 20;

let isValid: boolean = false;

console.log(isValid);

let emptList: string[];
emptList = ["Nitsu", "yoji", "kirei"];

let numList: Array<number>;
numList = [1, 2, 3, 11];

let resultFilter = numList.filter((num) => num > 2);
console.log(resultFilter);

let resultFind = numList.find((num) => num === 2);
console.log(resultFind);

let resultFindEmp = emptList.find((emp) => emp === "yoji");
console.log(resultFindEmp);

let sum= numList.reduce((acc,num)=> acc + num);
console.log(sum);

const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;

//tuple example
let swapNumbs: [number,number];

function swapNumbers(num1:number,num2:number): [number,number]{
    return [num2,num1]
}

swapNumbs= swapNumbers(10,20);
console.log(swapNumbs);
console.log(swapNumbs[1]);

//any datatype example. Avoid using it!
let department:any;

department="IT";
department=12;