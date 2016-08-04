'use strict';

let utils = require('./utils.js');
let exec = require('child_process').exec;

let Responder = () => {
};

Responder.executeCommand = command => {
    return new Promise((resolve, reject) => {
        let cmd = exec(command.cmd, (error, stdout, stderr) => {
            return error ? reject(stderr) : resolve(stdout);
        });

        cmd.stdout.on('data', data => {
            console.log(data);
            command.responses.forEach(response => {
                if (new RegExp(response.regex).test(data) && !response.matched) {
                    utils.sendResponse(cmd.stdin, response.response);
                    response.matched = true;
                }
            });
        });
    });
};

Responder.run = command => {
    return Responder.executeCommand(command);
};

module.exports = Responder;