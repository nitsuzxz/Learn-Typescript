"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "nitsu", id: 1, email: "" };
//access properties
user.name;
user.email;
//object destucturing example
let { name: userName, id: userID } = { name: "nitsu", id: 1, email: "" };
userName;
userID;
let Employees = { name: "nitsu", id: 1, email: "", salary: 5000 };
//array destructuring example
let [user1, user2, ...restUser] = [
    { name: "john", id: 1, email: "john@gmail.com" },
    { name: "john2", id: 2, email: "joh2n@gmail.com" },
    { name: "john3", id: 3, email: "john3@gmail.com" },
    { name: "john4", id: 4, email: "john4@gmail.com" },
];
//console.log(user1);
//console.log(user2);
//console.log(restUser);
let arrayUser = [
    { name: "john", id: 1, email: "john@gmail.com" },
    { name: "john2", id: 2, email: "joh2n@gmail.com" },
    { name: "john3", id: 3, email: "john3@gmail.com" },
    { name: "john4", id: 4, email: "john4@gmail.com" },
];
let result = arrayUser.filter(user => user.id > 1);
console.log(result);
console.log(arrayUser[0].name);
