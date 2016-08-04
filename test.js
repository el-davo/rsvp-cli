'use strict';

let exec = require('child_process').exec;

let cmd = exec('node prompt', (error, stdout, stderr) => {
    if (error) {
        console.error(stderr);
    } else {
        console.log(stdout);
    }
});

let responses = [
    {
        match: /response 1/,
        response: 'yes\n'
    },
    {
        match: /response 2/,
        response: 'no\n'
    },
    {
        match: /response 3/,
        response: 'maybe\n'
    }
];

cmd.stdout.on('data', data => {

    console.log(data);

    responses.forEach(response => {
        if(response.match.test(data) && !response.matched) {
            cmd.stdin.write(response.response);
            response.matched = true;
        }
    });
});