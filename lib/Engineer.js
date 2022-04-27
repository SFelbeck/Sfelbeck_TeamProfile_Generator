const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    // note: methods added to subclasses have had no effect on npm run test results  "this.github = github" "github is not defined"
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer