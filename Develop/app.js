const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Defining the path in which app.js generates the html page
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Render takes the inquirer prompt answers and inputs them into the html template,
//then the file system module writes the finished html to a file "team.html"
const render = require("./lib/htmlRenderer");
const { prompts } = require("inquirer");

//This variable stores the employee objects, each value being pushed into the templates
const team = []

//The inquirer prompts which get the necessary values from the user
const questions = () => {

//At the end of each question prompting chain, the employeeType function is called to 
//see if the user would like to continue. If not, it will end the program and call the render
//function to generate the final html
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
                console.log(team)
                fs.writeFile(outputPath, render(team), (err) =>
                    err ? console.error(err) : console.log("Page succesfully rendered"))
                break
                
        }
        })
    }

//At the end of this and the other prompt chains, a new object is created using the answers provided by the user,
//then the object is pushed into the "employees" array.
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
            }          
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager)
            employeeType()                       
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
            
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            team.push(engineer)
            employeeType()  
        })

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

            ]).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                team.push(intern)
                employeeType()  
            })

        }
    getManager() 
}

questions()
