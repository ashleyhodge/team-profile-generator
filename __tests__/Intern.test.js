const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new intern object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net');

    expect(intern.info).toEqual(
        expect.arrayContaining([expect.any(Object)])
        
    );
}); 

test('get school as an object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net');

    expect(intern.getSchool()).toHaveProperty('school');
})

test('get role as an object', () => {
    const intern = new Intern('Ashley', 1, 'ashhodge@comcast.net');

    expect(intern.getRole()).toHaveProperty('role');
})