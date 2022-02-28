const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const getManager = () => {
   return inquirer
   .prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the Manager of this team?'
       },
       {
           type: 'input',
           name: 'id',
           message: "Please enter the manager's ID number."
       },
       {
           type: 'input',
           name: 'email',
           message: "please enter the manager's email address."
       },
       {
           type: 'input',
           name: 'office',
           message: 'What is the office number for this team?'
       }
   ])
   .then(managerInput => {
       const { name, id, email, office } = managerInput;
       const manager = new Manager(name, id, email, office);

       teamArray.push(manager);
   }) 
}

const getEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Which would you like to enter?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?",
            when: (input) => input.role === "Engineer"
        }, 
        {
            type: 'input',
            name: 'school',
            message: "What school does this intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmGetEmployee',
            message: 'Would you like to continue building your team?'
        }
    ])
    .then(employeeInput => {
        let { name, id, email, role, github, school, confirmGetEmployee } = employeeInput;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        } 

        teamArray.push(employee);

        if (confirmGetEmployee) {
            return getEmployee(teamArray);
        } else { 
            return teamArray;
        }
    })
}



getManager()
    .then(getEmployee)
    .then(teamArray => {

    })