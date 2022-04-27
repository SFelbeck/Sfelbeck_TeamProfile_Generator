const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//constructs the subclass using the Employee class template and adds unique value
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
   // returns unique subclass role
    getRole(){
        return "Manager";
    }
        //returns unique subclass value
    getOfficeNumber(){
        return this.officeNumber;
    }
}
//exports the subclass
module.exports = Manager