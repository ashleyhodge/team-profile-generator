const Employee = require('../lib/Employee');

function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github

    this.info = [new Employee()];
}

Engineer.prototype.getGithub = function() {
    return {
        github: this.github
    }
};

Engineer.prototype.getRole = function () {
    return {
        role: this.role
    }
};
 
module.exports = Engineer;