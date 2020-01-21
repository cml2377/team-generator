const fs = require('fs');
const inquirer = require('inquirer');
const mustache = require('mustache');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//===================================================================
// Welcome to a team information HTML generator!
//===================================================================

// This array fills in with employee data.
const teamMembers = [];
// Manager will change-- can't be a const. 
let manager;
// This info is for the HTML.
let teamTitle;

//=========================================================
// First, we prompt the user for the manager/project info.
//=========================================================

function managerData() {
    inquirer.prompt([
        {   // Fill html with teamName.
            type: "input",
            message: "What is the name of this team/project?",
            name: "teamName"
        },
        {   // There is only 1 manager for a team.
            type: "input",
            message: "Who is the manager of this project?",
            name: "managerName"
        },
        {   // Employee ID.
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {   // Employee Email.
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamTitle = managerAnswers.teamName;
            console.log("Now we will ask for employee information.")
            lesserEmployeeData();
        });
}
//=================================================================
// This repeats if more employees need to be added.
//=================================================================
function lesserEmployeeData() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },

        //==================================================================
        // These questions are based on the employeeRole above.
        //==================================================================
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "What is the Engineer's Github?",
            name: "github",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "What's the Intern's school?",
            name: "school",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another team member?" // if yes, go back again. If no, renderHTML
        }
    ]).then(answers => {
        // Pushes a new intern into the team members array
        if (answers.employeeRole === "Intern") {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee);
        } else if (answers.employeeRole === "Engineer") {
            // A different way of pushing the info into teamMembers array.
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
        }
        if (answers.newEmployee === true) {
            lesserEmployeeData();
        } else {
            //renderHTML
        }
    });
}

managerData();
