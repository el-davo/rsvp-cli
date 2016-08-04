'use strict';

let commands = require('../commands.json');
let exec = require('child_process').exec;

let cmd = exec('node prompt', (error, stdout, stderr) => {
    if (error) {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});

cmd.stdout.on('data', data => {
    console.log(data);
    responses.forEach(response => {
        if (response.match.test(data) && !response.matched) {
            cmd.stdin.write(response.response);
            response.matched = true;
        }
    });
});

function executeCommand() {
    return new Promise((resolve, reject) => {

    });
}


function run() {

}

module.exports = run;