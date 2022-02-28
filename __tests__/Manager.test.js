const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new manager object', () => {
    const manager = new Manager('Ashley', 1, 'ashhodge@comcast.net', 12);

    expect(manager.office).toEqual(expect.any(Number));
}); 

test('get role as an object', () => {
    const manager = new Manager('Ashley', 1, 'ashhodge@comcast.net', 12);

    expect(manager.getRole()).toEqual('Manager');
})