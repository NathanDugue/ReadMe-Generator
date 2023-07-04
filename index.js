//nodejs packages

import { prompt } from 'inquirer';
import { writeFile } from 'fs';

//questions from inquirer
prompt(
    [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you install your app',
            name: 'installation',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'What instructions need to be followed?',
            name: 'instructions',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Any credits?',
            name: 'installation',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ["MIT", "GPL", "APACHEZ.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "N/A"],
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'git',
            validate: (value) => {if(value){return true} else {return 'I need a value to continue'}},
        },

    ]
).then(({
    title,
    installation,
    instruction,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution

})=>{
// template to be used 
const template =  `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Instruction
${instruction}
## Credit
${credit}
##License
${license}

# Contact
* Github : ${git}
* Linkedin : ${linkedin}
* Email: ${email}`;

//Create a README 
createNewFile(title,template);
}
);

function createNewFile(fileName,data){

    writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,()=>{
        if(err){
            console.log(err)
        }
        console.log("Your README has bee generated");
    })
};

