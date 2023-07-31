"use strict";
let lname;
lname = "nitsu";
console.log(lname.toUpperCase());
let age;
age = 20;
let isValid = false;
console.log(isValid);
let emptList;
emptList = ["Nitsu", "yoji", "kirei"];
let numList;
numList = [1, 2, 3, 11];
let resultFilter = numList.filter((num) => num > 2);
console.log(resultFilter);
let resultFind = numList.find((num) => num === 2);
console.log(resultFind);
let resultFindEmp = emptList.find((emp) => emp === "yoji");
console.log(resultFindEmp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 0 /* Color.Red */;
//tuple example
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
console.log(swapNumbs[1]);
//any datatype example. Avoid using it!
let department;
department = "IT";
department = 12;
