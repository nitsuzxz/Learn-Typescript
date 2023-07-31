export interface User{
    name:string;
    age?:number; // use ? make the the value optional
    id: number;
    email:string;

}

let user:User ={name:"nitsu", id:1, email:""}; 
//access properties
user.name;
user.email;

//object destucturing example
let {name:userName,id:userID}:User ={name:"nitsu", id:1, email:""}; 
userName;
userID

interface Employees extends User{
    salary:number;
}

let Employees:Employees= {name:"nitsu",id:1,email:"",salary:5000};

export interface Login {
    login():User;
}

//array destructuring example
let [user1,user2, ...restUser]:User[]=[
    {name:"john",id:1,email:"john@gmail.com"},
    {name:"john2",id:2,email:"joh2n@gmail.com"},
    {name:"john3",id:3,email:"john3@gmail.com"},
    {name:"john4",id:4,email:"john4@gmail.com"},
]

//console.log(user1);
//console.log(user2);
//console.log(restUser);
let arrayUser:User[]=[
    {name:"john",id:1,email:"john@gmail.com"},
    {name:"john2",id:2,email:"joh2n@gmail.com"},
    {name:"john3",id:3,email:"john3@gmail.com"},
    {name:"john4",id:4,email:"john4@gmail.com"},
]
let result =arrayUser.filter(user => user.id >1);
console.log(result);
console.log(arrayUser[0].name);