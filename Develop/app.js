const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];

function managerPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee office number?'
        },
    ])
    .then(function(answers) {
        var manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
    })
}

function engineerPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee github?',
        },
    ])
    .then(function(answers) {
        var engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
    })
}

function internPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the employee school?',
        },
    ])
    .then(function(answers) {
        var intern = new Intern(answers.id, answers.name, answers.email, answers.school);
    })
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function mainMenu() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'selection',
        message: 'Which employee type do you wish to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'Quit']
    }])
    .then(function(answers) {
        switch(answers.selection) {
            case 'Manager':
                managerPrompt();
                mainMenu();
                break;

            case 'Engineer':
                engineerPrompt();
                mainMenu();
                break;
             
            case 'Intern':
                internPrompt();
                mainMenu();
                break;
                
            default:
                renderEmployeeCards();
        }
    })
}

render(employees);

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
