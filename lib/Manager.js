const Employee = require('../lib/Employee');

function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;

    this.info = [new Employee()];
};

module.exports = Manager;