const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new manager object', () => {
    const manager = new Manager('Ashley', 1, 'ashhodge@comcast.net', 12);

    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.info).toEqual(
        expect.arrayContaining([expect.any(Object)])
        
    );
}); 

