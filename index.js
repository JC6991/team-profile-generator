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

// array that will hold all new employees
let newTeam = [];

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
                name: 'officeNumber',
                message: 'What is your office number?'
            },
        ]).then((managerInput) => {

            // sets the constructor parameters from the user input
            const { name, id, email, officeNumber } = managerInput;

            // creates new manager employee using the "Manager" constructor
            const manager = new Manager(name, id, email, officeNumber);

            // push employee into newTeam array
            newTeam.push(manager);

            // reloads the menu to add more employees or finish creating team
            menuOption();
        });
};

// function for menu option inquirer 
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

            // prompts user to select to add employees or finish creating team
            switch (answer.options) {
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
    // prompt for engineer to enter their information
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
                name: 'gitHub',
                message: 'What is your GitHub username?'
            }
        ]).then((engineerInput) => {
            // sets the constructor parameters from the user input
            const { name, id, email, gitHub } = engineerInput;

            // creates new engineer employee using the "Engineer" constructor
            const engineer = new Engineer(name, id, email, gitHub);

            // push employee into newTeam array
            newTeam.push(engineer);

            // reloads the menu to add more employees or finish creating team
            menuOption();
        });

};

// function if user selects intern
function addIntern() {
    // prompt for intern to enter their information
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
        ]).then((internInput) => {

            // sets the constructor parameters from the user input
            const { name, id, email, school } = internInput;

            // creates new intern employee using the "Intern" constructor
            const intern = new Intern(name, id, email, school);

            // push employee into newTeam array
            newTeam.push(intern);

            // reloads the menu to add more employees or finish creating team
            menuOption();
        });
};

// function if user selects finish building team
function completeTeam() {
    console.log('You have created your team.');

    // function that passes the newTeam array to the generateTeam functionand creates HTML file
    fs.writeFile(outputPath, render(newTeam), (err) =>
    err ? console.log(err) : console.log('Success!')
    );

};

// function to initialize program
function init() {
    addManager();
}

// function call to initialize program
init();