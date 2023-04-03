// TODO: Include packages needed for this application


const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Please enter the title of your project'
    },
    {
        name: 'description',
        message: 'Provide a short description of your project'
    },
    {
        name: 'installation',
        message: 'Provide the steps for installation of your project, if any'
    },

    {
        name: 'usage',
        message: 'Provide instructions for usage of this application'
    },
    {
        name: 'contributions',
        message: 'Provide guidance on how could other developers contribute to this project'
    },
    {
        name: 'tests',
        message: 'Provide guidance on how this application can be tested'
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Please select the license that is being used for this project ',
        choices: ['MIT', 'GPLv2', 'Apache']
    },
    {
        name: 'github',
        message: 'Please provide a link to your github profile'
    },
    {
        name: 'email',
        message: 'Please provide a link to your email address'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, (err) => {
        if (err)
        return console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((questions) => {
            writeToFile('./readme.md', generateMarkdown(questions))
        })
}

// Function call to initialize app
init();

