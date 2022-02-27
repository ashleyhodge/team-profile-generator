const Manager = require('../lib/Manager');

test('Create a new manager object', () => {
    const manager = new Manager('Ashley', 1, 'ashhodge@comcast.net', 12);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
}); 