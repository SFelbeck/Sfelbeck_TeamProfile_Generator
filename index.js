// links inquirer, fs and all relevant employee classes and subclasses
const inquirer = require('inquirer');
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require('fs');
// links path and the generate html file
const path = require('path');
const generateHTML = require("./util/generateHtml.js");
//directs the path to create a file named index.html and send it to the dist folder
const sendFile = path.resolve(__dirname, "dist");
const fileName = path.join(sendFile, "index.html");
//creates an array to hold all the employee objects
const team = [];
//initial function that displays inquirer prompts that allow the user to select what kind of employee they want to add to the array and then calls the appropriate function
function addEmployees() {
    inquirer.prompt([
        {
            name: 'selection',
            type: 'list',
            choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "I'm Done"]
        }
    ]).then(answers => {
        switch (answers.selection) {
            case "Add a Manager":
                console.log("add manager!")
                addManager();
                break;

            case "Add an Engineer":
                console.log("adding engineer")
                addEngineer();
                break;

            case "Add an Intern":
                console.log("Add an Intern")
                addIntern();
                break;

            case "I'm Done":
                console.log("compiling html")
                finalize();
                break;
        }
    })
}
// displays a series of inquirer prompts and uses the responses to generate a manager employee object and pushes it to the team array before setting up the addEmployees function for the next employee
    function addManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the manager for your project?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee ID of the manager?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email address of the manager?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number of the manager?'
                }
            ]
            ).then((response) => {
                console.log(response);
                const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
                team.push(newManager);
                addEmployees();
            })
    }
// displays a series of inquirer prompts and uses the responses to generate a engineer employee object and pushes it to the team array before setting up the addEmployees function for the next employee
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of your engineer?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee ID of your engineer?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email address of your engineer?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the GitHub username of your engineer?'
                }
            ]
            ).then((response) => {
                console.log(response);
                const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                team.push(newEngineer);
                addEmployees();
            })
    }
// displays a series of inquirer prompts and uses the responses to generate a intern employee object and pushes it to the team array before setting up the addEmployees function for the next employee
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of your intern?'
                },
                {
                    type: "input",
                    name: 'id',
                    message: 'What is the employee ID of your intern?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email address of your intern?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does your intern go to?'
                }
            ]
            ).then((response) => {
                console.log(response);
                const newIntern = new Intern(response.name, response.id, response.email, response.school);
                team.push(newIntern);
                addEmployees();
            })
    }
// writes an html file using the generateHTML template or throws an error if something has gone horribly awry
    function finalize(){
        fs.writeFileSync(fileName, generateHTML(team), "utf-8", function(err){
            if(err)throw err
        })
    }
    //initial call for the addEmployees function waaaay at the bottom because it felt the most secure here, I dont make the rules
    addEmployees();