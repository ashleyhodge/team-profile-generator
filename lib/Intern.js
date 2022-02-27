const Employee = require('../lib/Employee');

function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

    this.info = [new Employee()];
}

Intern.prototype.getSchool = function() {
    return {
        school: this.school
    }
};

Intern.prototype.getRole = function () {
    return {
        role: this.role
    }
};
 
module.exports = Intern;