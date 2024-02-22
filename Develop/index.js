// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Please enter your README Title: ",
    
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application:",
    },
    {
        type: "input",
        name: "installinfo",
        message: "Please enter information on how to install your Application:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter information on how to use your Application:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter Contribution Guidlines:",
    },
    {
        type: "input",
        name: "testing",
        message: "Enter testing instructions",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose your License:",
        choices: [
            "MIT",
            "GPL 3.0",
            "BSD 3",
            "None",
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
