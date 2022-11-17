const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./src/templateCode");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { type } = require("os");

let listOfWorkers = [];

managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Managers Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Managers ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Managers Email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Managers Office Number:",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      listOfWorkers.push(manager);
      continuePrompt();
    });
};

continuePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What type of employee would you like to add?",
        choices: ["Intern", "Engineer", "Exit And Build My Team"],
      },
    ])
    .then((optionData) => {
      if (optionData.option === "Intern") {
        internPrompt();
      } else if (optionData.option === "Engineer") {
        engineerPrompt();
      } else {
        let complete = html(listOfWorkers);
        completeHtml(complete);
      }
    });
};

internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Interns name:",
      },
      {
        type: "input",
        name: "id",
        message: "Interns ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Interns email:",
      },
      {
        type: "input",
        name: "school",
        message: "Interns school:",
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
      listOfWorkers.push(intern);
      continuePrompt();
    });
};

engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineers name:",
      },
      {
        type: "input",
        name: "id",
        message: "Engineers ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineers email:",
      },
      {
        type: "input",
        name: "github",
        message: "Engineers GitHub:",
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github } = engineerData;
      const engineer = new Engineer(name, id, email, github);
      listOfWorkers.push(engineer);
      continuePrompt();
    });
};

completeHtml = (allInfo) => {
  fs.writeFile("./dist/main.html", allInfo, (err) =>
    err ? console.log(err) : console.log("Your Team Was Successfully Created!")
  );
};

managerPrompt();
