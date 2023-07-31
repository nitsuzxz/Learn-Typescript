"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //create constructor
    constructor(id, name, address) {
        _Employee_id.set(this, void 0); // use # to make private properties
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "nitsu", id: 1, email: "" };
    }
    // static instace is belong to the class instead of instance of class. We can access static properties or method 
    //without creating an object of the class.
    static getEmployeeCount() {
        return 60;
    }
    //create method to retunr string
    getNameAndAddress() {
        return this.name + " " + this.address.street;
    }
    getNameAndAddress2() {
        return `${this.name} live at ${this.address.street}`;
    }
    //getter method
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //setter method
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    //manager classes will inherit from employee classes
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameAndAddress() {
        return `${this.name} manager at ${this.address.street}`;
    }
}
console.log(Employee.getEmployeeCount());
let john = new Employee(12, "John Cena", { street: "Jalan 1", city: "Cheras", state: "Kuala Lumpur" });
console.log(john);
let address = john.getNameAndAddress();
let address2 = john.getNameAndAddress2();
//using setter to replace john id from 12 to 100
john.empId = 100;
//using getter to get john id
console.log("john new id: " + john.empId);
///console.log(address);
console.log(address2);
let mike = new Manager(13, "Mike", { street: "Jalan 2", city: "Ampang", state: "Kuala Lumpur" });
console.log(mike);
console.log(mike.getNameAndAddress());
