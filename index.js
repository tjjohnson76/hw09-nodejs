// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


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
        choices: ["MIT", "IBM", "Apache", "Eclipse", "Boost"]
    },
    // License badge links respectively according to choices
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)    
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


    let fileString = (`
        # ${data.title}


        ## Table of Contents
        - Descrition
        - Installation Instructions
        - Usage Information
        - License
        - Contribution Guidelines
        - Test Instructions
        - Questions

        ## Description
        ${data.description}

        ## Installation
        ${data.installInstructions}

        ## Usage
        ${data.useInfo}

        ## License


        ## Contribution
        ${data.contribution}

        ## Tests
        ${data.testInstructions}

        ## Questions

        [GitHub](https://github.com/${data.github})
        Email: ${data.email}
            - Feel free to contact me at any time with questions, but please allow a few days for a response.
        `);

    fs.writeFile(fileName, fileString.raw[0],(err) => err ? console.log(err) : console.log("Success!"));

}

// TODO: Create a function to initialize app
async function init() {

    const responses = await inquirer.prompt(questions);

    writeToFile("sample-README.md", responses);

}

// Function call to initialize app
init();
