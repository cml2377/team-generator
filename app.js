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

//=============================================
// First, we prompt the user
//=============================================

async function queryData(userInput) {
    inquirer.prompt()[
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
        //=================================================================
        // This repeats if more employees need to be added.
        //=================================================================
        {
            type: "rawList",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },

        //==================================================================
        // These questions are based on the employeeRole above.
        //==================================================================
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "engineerName",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "What's the Intern's name?",
            name: "internName",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another team member?"
        },
    ]
};

queryData();

app.engine('html', mustache());

function renderEmployees(name, id, title) {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { name: 'Crystal' });
    document.getElementById('target').innerHTML = rendered;
};
