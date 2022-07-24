//required to link to the file we are testing
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //use 'new' to create new Potion objects
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);

    //we allow the value to be any number, rather than a number in a range so that the test has more flexibility
    expect(potion.value).toEqual(expect.any(Number));
})