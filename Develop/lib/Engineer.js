// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

//super
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// github  // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
        this.name = name
        this.id = id
        this.email = email
        this.role = "engineer"
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
}

module.exports = Engineer