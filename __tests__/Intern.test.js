const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new intern object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net', 'Vanderbilt');

    expect(intern.school).toEqual(expect.any(String));
}); 

test('get school as an object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net', 'Vanderbilt');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('get role as an object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net');

    expect(intern.getRole()).toEqual('Intern');
})