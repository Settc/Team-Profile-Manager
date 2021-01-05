const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { prompts } = require("inquirer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const employees = []


const questions = () => {

    employeeType = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Would you like to add another employee type?",
                choices: ["none", "manager", "engineer", "intern"]
            }
        ]).then(answers => {
        switch (answers.employeeType) {
            case "manager":
                getManager()
                break
            case "engineer":
                getEngineer()
                break
            case "intern":
                getIntern()
                break
            case "none":
                console.log("Generating page...")
                //render()
        }
        })
    }

    getManager = () => {
        console.log("Teams are required to have at least one manager")
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please input the name of the team's manager:",
            },
            {
                type: "input",
                name: "id",
                message: "Input manager ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Input manager email:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Input manager office number:",
            },
            
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employees.push(manager)
                       
        })
    }

    getEngineer = () => {
        
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please input the name of the engineer:",
            },
            {
                type: "input",
                name: "id",
                message: "Input engineer ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Input engineer email:",
            },
            {
                type: "input",
                name: "gitHub",
                message: "Input github address:",
            },
            
        ])

    }

        getIntern = () => {
            
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please input the name of the intern:",
                },
                {
                    type: "input",
                    name: "id",
                    message: "Input intern ID:",
                },
                {
                    type: "input",
                    name: "email",
                    message: "Input intern email:",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Input intern's school:",
                }

            ])

        }
         
}
questions()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
