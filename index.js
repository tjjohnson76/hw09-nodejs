// TODO: Include packages needed for this application
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installInstructions"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "useInfo"
    },
    {
        type: "input",
        message: "What are the contribution guidlines for your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "testInstructions"
    },
    {
        type: "list",
        message: "Which license are you using for this project?",
        name: "license",
        choices: []
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {

    let userReadMe = {
        title: "",
        description: "",
        installInstructions: "",
        useInfo: "",
        constribution: "",
        testInstructions: "",
        license: "",
        github: "",
        email: "",
    }

    


}

// Function call to initialize app
init();
