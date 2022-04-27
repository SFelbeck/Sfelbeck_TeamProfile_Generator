const inquirer = require('inquirer');
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require('fs');
const path = require('path');
const generateHTML = require("./util/generateHtml.js");

const sendFile = path.resolve(__dirname, "dist");
const fileName = path.join(sendFile, "index.html");
const team = [];

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
            ).then((name) => {
                console.log(name);
                const newEngineer = new Engineer(name.name, name.id, name.email, name.github);
                team.push(newEngineer);
                addEmployees();
            })
    }

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
            ).then((name) => {
                console.log(name);
                const newIntern = new Intern(name.name, name.id, name.email, name.school);
                team.push(newIntern);
                addEmployees();
            })
    }

    function finalize(){
        fs.writeFileSync(fileName, generateHTML(team), "utf-8", function(err){
            if(err)throw err
        })
    }
    addEmployees();