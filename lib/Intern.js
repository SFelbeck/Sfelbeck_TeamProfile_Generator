const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//constructs the subclass using the Employee class template and adds unique value
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    // returns unique subclass role
    getRole(){
        return "Intern";
    }
    //returns unique subclass value
    getSchool(){
        return this.school;
    }
}
//exports the subclass
module.exports = Intern