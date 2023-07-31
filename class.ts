import {Login,User} from './interface';


interface Address{
    street: string;
    city: string;
    state: string;
    
}

class Employee implements Login{
    #id:number; // use # to make private properties
    protected name:string; //protected properties useful when textend classes
    address:Address;// by default properties is public
    
    //create constructor
    constructor(id:number, name:string, address:Address){
        this.#id=id;
        this.name=name;
        this.address=address;
    }
   

    login():User{
        return {name:"nitsu", id:1, email:""}; 
    }
 

    // static instace is belong to the class instead of instance of class. We can access static properties or method 
    //without creating an object of the class.
    static getEmployeeCount():number{
        return 60;
    }
    //create method to retunr string
    getNameAndAddress():string{
        return this.name + " "+ this.address.street;
    }
    
    getNameAndAddress2():string{
        return `${this.name} live at ${this.address.street}`;
    }

    //getter method
    get empId():number{
        return this.#id;
    }

    //setter method
    set empId(id:number){
        this.#id=id;
    }
}

class Manager extends Employee{
    //manager classes will inherit from employee classes
    constructor(id:number, name:string, address:Address) {
        super(id,name,address);
        
    }

    getNameAndAddress():string{
        return `${this.name} manager at ${this.address.street}`;
    }
}

console.log(Employee.getEmployeeCount());


let john = new Employee(12,"John Cena",{street:"Jalan 1",city:"Cheras",state:"Kuala Lumpur"});
console.log(john);
let address= john.getNameAndAddress();
let address2= john.getNameAndAddress2();

//using setter to replace john id from 12 to 100
john.empId=100;
//using getter to get john id
console.log("john new id: "+ john.empId);
///console.log(address);
console.log(address2);

let mike = new Manager(13,"Mike",{street:"Jalan 2",city:"Ampang",state:"Kuala Lumpur"});
console.log(mike);
console.log(mike.getNameAndAddress());