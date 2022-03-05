#!/usr/bin/env node
const getFile = require('./index');
const validateURLs = require('./http-validation');

const path = process.argv;

async function textProcessor(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === 'validate') {
        console.log('validated links', await validateURLs(result))
    } else {
        console.log('link list', result);    
    }
}

textProcessor(path);