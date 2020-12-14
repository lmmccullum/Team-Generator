const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = []

// Employee

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What team member would you like to add?',
      name: 'members',
      choices: ["Employee", "Engineer", "Intern", "Manager", "Quit"]
    },
  ]).then((response) => {
    if (response.members === "Quit") {
      render(team)
    }
    if (response.members === "Employee") {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
          },
        ])
        .then((response) => {
          let newEmployee = new Employee(response.username, response.id, response.email);
          team.push(newEmployee);

        }
        );
    }
  });

//  Engineer

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What team member would you like to add?',
      name: 'members',
      choices: ["Employee", "Engineer", "Intern", "Manager"]
    },
  ]).then((response) => {
    if (response.members === "Engineer") {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
          },
        ])
        .then((response) => {
          let newEngineer = new Engineer(response.username, response.id, response.email, response.github);
          team.push(newEngineer);
        });
    }

    // Intern

    inquirer
      .prompt([
        {
          type: 'list',
          message: 'What team member would you like to add?',
          name: 'members',
          choices: ["Employee", "Engineer", "Intern", "Manager"]
        },
      ]).then((response) => {
        if (response.members === "Intern") {
          inquirer
            .prompt([
              {
                type: 'input',
                message: 'What is your user name?',
                name: 'username',
              },
              {
                type: 'input',
                message: 'What is your id?',
                name: 'id',
              },
              {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
              },
              {
                type: 'input',
                message: 'What is the name of your school?',
                name: 'school',
              },
            ])
            .then((response) => {
              let newIntern = new Intern(response.username, response.id, response.email, response.school);
              team.push(newIntern);
        });
  }

// Manager

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What team member would you like to add?',
      name: 'members',
      choices: ["Employee", "Engineer", "Intern", "Manager"]
    },
  ]).then((response) => {
    if (response.members === "Manager") {
      inquirer
        .prompt([
          {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is your officeNumber?',
            name: 'officeNumber',
          },
        ])
        .then((response) => {
          let newManager = new Manager(response.username, response.id, response.email, response.officeNumber);
    team.push(newManager);
    });
    }

    function init() {
      inq.prompt(team).then((data) => {
          console.log(data)
      fs.writeFile('team.html')
   });
  }

init();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
