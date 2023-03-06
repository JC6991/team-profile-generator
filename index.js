const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const Employee = require("./lib/Employee") 

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { log } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// fs.writeFile(outputPath, data)

// function to add the manager of the team
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'What is your office number?'
            },
        ]).then((manager) => {
            console.log(manager);

            const { name, id, email, officeNum } = manager;

            const newManager = new Manager(name, id, email, officeNum);
            console.log(newManager);
            menuOption();
        });
};

// function fo menu option inquirer 
function menuOption() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                choices: ['Add Engineer', 'Add Intern', 'Complete the team'],
                default: 'Complete the team'
            }
        ]).then((answer) => {
            switch (answer) {
                case 'Add Engineer':
                    addEngineer();
                    break;
                case 'Add Intern':
                    addIntern();
                    break;
                case 'Complete the team':
                    completeTeam();
                    break;
            }
        });
};

// function if user selects engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'userName',
                message: 'What is your GitHub username?'
            }
        ]).then((answers) => {

        });

};

// function if user selects intern
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is your school?'
            }
        ]).then((answers) => {

        });
};

// function if user selects finish building team
function completeTeam() { };

// function to initialize program
function init() {
    addManager();
}

// function call to initialize program
init();