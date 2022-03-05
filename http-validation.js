const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function errorHandler(error) {
    throw new Error(error.message);
}

async function checkStatus(urlsArray) {
    try {
        const arrayStatus = await Promise
        .all(urlsArray
            .map(async url => {
                const res = await fetch(url);
                return res.status;
        }));
        return arrayStatus;
    } catch (error) {
        errorHandler(error);
    }
    
}

function generateURLsArray(linksArray) {
    return linksArray
        .map(urlObject => Object
            .values(urlObject).join())
}

async function validateURLs(linksArray) {
    const links = generateURLsArray(linksArray);
    const statusLinks = await checkStatus(links);
    const urlsWithStatus = linksArray.map((object, index) => ({
        ...object, 
        status: statusLinks[index]
    }))
    return urlsWithStatus;
}

module.exports = validateURLs;