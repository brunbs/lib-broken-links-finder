const fs = require('fs');

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultArray = [];
    let temp;
    while((temp = regex.exec(text)) !== null) {
        resultArray.push({ [temp[1]]: temp[2]})
    }
    return resultArray.length === 0 ? 'No urls found in file' : resultArray;
}

function onError(err) {
    console.log(err);
    throw new Error(err.code, 'No such file on path');
}

async function getFile(filePath) {
    const encoding = 'utf-8';
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        return extractLinks(text);
    } catch (err) {
        onError(err)
    }
}

module.exports = getFile;