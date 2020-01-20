const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const mustache = require('mustache');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//===================================================================
// Welcome to a team information HTML generator!
//===================================================================

//=============================================
// First, we prompt the user
//=============================================

async function userInput() {
    inquirer.prompt()[
        {
            type: "input",
            message: "What is the name of this team/project?",
            name: "teamName"
        },
        {
            type: "input",
            message: "Who is the manager of this project?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "",
            name: "managerTitle"
        },
        {
            type: "rawList",
            message: "How many Engineers are in the team?",
            choices: [1, 2, 3, 4]
        }
    ]
}

userInput();