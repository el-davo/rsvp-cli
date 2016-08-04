'use strict';

let inquirer = require('inquirer');

let questions = [
    {
        name: 'test',
        type: 'string',
        message: 'response 1'
    },
    {
        name: 'test2',
        type: 'string',
        message: 'response 2'
    },
    {
        name: 'test3',
        type: 'string',
        message: 'response 3'
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(answers);
});