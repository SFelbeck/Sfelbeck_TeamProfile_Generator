const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//constructs the subclass using the Employee class template and adds unique value
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
   // returns unique subclass role
    getRole(){
        return "Engineer";
    }
    //returns unique subclass value
    getGithub(){
        return this.github;
    }
}
//exports the subclass
module.exports = Engineer