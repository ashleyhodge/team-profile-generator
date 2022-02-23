const Employee = require('../lib/Employee');

test('Create a new employee object', () => {
    const employee = new Employee('Ashley', 1, 'ashhodge@comcast.net');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
}); 