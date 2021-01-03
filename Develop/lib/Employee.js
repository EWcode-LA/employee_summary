// TODO: Write code to define and export the Employee class
//Function that has employe name, position, id, email, and office number or github

// function Employee(name, position, id, email, github) {
//     this.name = 
//     this.position =
//     this.id =
//     this.email =
//     this. github =
// }
//create class per readme

 class Employee {
    constructor (name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
       
    }
    //enter get syntax
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


