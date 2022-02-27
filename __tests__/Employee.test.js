const Employee = require('../lib/Employee');

test('Create a new employee object', () => {
    const employee = new Employee('Ashley', 1, 'ashhodge@comcast.net');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
}); 

test('get name as an object', () => {
    const employee = new Employee('Ashley', 1, 'ashhodge@comcast.net');

    expect(employee.getName()).toHaveProperty('name');
});

test('get id as an object', () => {
    const employee = new Employee('Ashley', 1, 'ashhodge@comcast.net');

    expect(employee.getId()).toHaveProperty('id');
});

test('get email as an object', () => {
    const employee = new Employee('Ashley', 1, 'ashhodge@comcast.net');

    expect(employee.getEmail()).toHaveProperty('email');
});