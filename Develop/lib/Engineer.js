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
    constructor(github) {
        super(name, id, email);

    }
}