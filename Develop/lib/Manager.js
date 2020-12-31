// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
        this.name = name
        this.id = id
        this.email = email
    }

    getOfficeNumber() {
        return this.officeNumber
    }
   
    getRole() {
        return "Manager"
    }
}

module.exports = Manager

//super
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'