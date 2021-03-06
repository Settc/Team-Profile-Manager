// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

//school
//getSchool()
//getRole() returns "Intern"

//super
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
        this.name = name
        this.id = id
        this.email = email
        this.role = "intern"
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.exports = Intern