//Packages used for this application
const inquirer = require('inquirer');
const fs = require('fs');
//Supposed to link to the generateMarkdown.js to complete the process
const generate = require("./utils/generateMarkdown");

// Array of questions to ask
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



//Begins the questions about your markdown page
function init() {
    inquirer.prompt(questions).then((answers) => {
        const generateMarkdown = generate(answers);
     } );

}

        
        
    

//Runs the program on start
init();
