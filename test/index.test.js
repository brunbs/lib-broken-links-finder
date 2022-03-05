const getFile = require('../index');
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', () => {
    it('must be a function', () => {
        expect(typeof getFile).toBe('function');
    })
    it('must return array with results', async () => {
        const result = await getFile('./test/files/text1.md')
        expect(result).toEqual(arrayResult)
    })
    it('must return message: "No urls found in file"', async () => {
        const result = await getFile('./test/files/text1_noLinks.md')
        expect(result).toBe('No urls found in file');
    })
})

test('must be a function', () => {
    expect(typeof getFile).toBe('function');
});