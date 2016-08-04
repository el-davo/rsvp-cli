#! /usr/bin/env node
'use strict';

let responder = require('./lib/responder.js');
var argv = require('yargs').argv;
var fs = require('fs');

if (!argv.f) {
    console.error('-f flag required');
    process.exit(1);
}

let commands = fs.readFileSync(argv.f, 'utf8');

responder.run(JSON.parse(commands))
    .catch(error => {
        console.error(error)
    });