const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test('Create a new engineer object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net');

    expect(engineer.info).toEqual(
        expect.arrayContaining([expect.any(Object)])
        
    );
}); 

test('get github username as an object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net');

    expect(engineer.getGithub()).toHaveProperty('github');
})

test('get role as an object', () => {
    const engineer = new Engineer('Ashley', 1, 'ashhodge@comcast.net');

    expect(engineer.getRole()).toHaveProperty('role');
})