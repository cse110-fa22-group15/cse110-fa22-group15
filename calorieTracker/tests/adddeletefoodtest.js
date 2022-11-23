const { it } = require('node:test');

describe('Add & Delete Food tests', () => {
    // Change this constant value before testing!
    console.log("get html file")
    const fs = require('fs');
    const path = require('path');
    const html = fs.readFileSync(path.resolve(__dirname, '../11232022-V1.4 copy/Homepage.html'), 'utf8');

    console.log("got html file")

    it('Directly go to homepage if not a new user', async () => {
        
        expect(currPage).toBe('Homepage.html')
      });
});
