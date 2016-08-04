'use strict';

let Utils = () => {
};

Utils.clickEnter = stdin => {
    stdin.write('\n');
};

Utils.sendResponse = (stdin, response) => {
    stdin.write(response);
    Utils.clickEnter(stdin);
};

module.exports = Utils;
