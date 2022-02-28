const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new engineer object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net', 'ashleyhodge');

    expect(engineer.github).toEqual(expect.any(String));
}); 

test('get github username as an object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net', 'ashleyhodge');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('get role as an object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net');

    expect(engineer.getRole()).toEqual('Engineer');
})