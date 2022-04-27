// TODO: Write code to define and export the Employee class
class Employee{
    //constructs the basic employee class with required values and sets role to Employee but that should be overwritten by all the subclasses
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    //functions that return all the necessary values
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}
// exports this bizness
module.exports = Employee