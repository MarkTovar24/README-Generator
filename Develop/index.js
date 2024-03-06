
// all needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// All the questions asked when running the application, using inquirer
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUsername',
    },

    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'emailadress',
    },

    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectname',
    },

    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Enter install information',
        name: 'installinfo',
    },

    {
        type: 'input',
        message: 'Enter Usage Information',
        name: 'usageinfo',
    },

    {
        type: 'input',
        message: 'Enter Contribution Guidlines',
        name: 'contribution',
    },

    {
        type: 'input',
        message: 'Enter testing instructions',
        name: 'testing',
    },

    {
        type: 'checkbox',
        message: 'Please select a licence.',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'none',
        ],
        name: 'licenses',

    }
];

//Writes response data into the markdown file in the Output folder
function writeToFile(fileName, responses) {
    fs.writeFile(fileName, responses, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file created successfully!')
    })
}

//Initializes app, triggering the questions and then pulling responses
function init() {
    inquirer.prompt(questions).then((responses) => {
//creating objects for the responses and the file/type/output
        const markdown = generateMarkdown(responses);
        const fileName = '../Develop/Output/README.md'
//triggers the proccess to write the responses into the output
        writeToFile(fileName, markdown)
    });
};

// Starts everything
init();
