//different way to write function

function addExample1(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("add example 1=> " + addExample1(2, 5));

const subExample2 = (num1: number, num2: number): number => num1 - num2;

console.log("subtract Example =>" + subExample2(5, 3));

const multExample3 = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log("multiplication Example =>" + multExample3(5, 3));


//optional parameter example
function addOptional1(num1: number, num2: number, num3?:number): number {
    return num3? num1 + num2+ num3: num1 + num2;
  }
  
  console.log("add optional  1=> " + addOptional1(2, 5));
  console.log("add optional  2=> " + addOptional1(2, 5, 5));

//example required parameter

const subRequired = (num1: number, num2: number, num3=10): number => num1 - num2 - num3;

console.log("subtract Required Example 1=>" + subRequired(20, 4));
console.log("subtract Required Example 2=>" + subRequired(20, 5, 2));

//rest parameter
function addRestParameter(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b)=> a+b, 0);
  }

console.log("Rest Example => "+ addRestParameter(2,3,...[4,5,6]));
let numbers=[5,5,20];

console.log("Rest Example using array var => "+ addRestParameter(2,3,...numbers));

console.log("Rest Example without array=> "+ addRestParameter(3,3,4,5,6,7,8,9,10));

//Generic function

function getItems<Type>(items:Type[]):Type[]{
  return new Array<Type>().concat(items);
}

let concatNumber= getItems<number>([1,2,3,4,5]);
let concatString= getItems<string>(["A","B","C","D"]);

console.log("concat number: " +concatNumber );