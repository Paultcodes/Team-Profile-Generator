const inquirer = require("inquirer");
const fs = require("fs");

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
      console.log(manager);
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
        choices: ["Intern", "Engineer", "Exit"],
      },
    ])
    .then((optionData) => {
      if (optionData.option === "Intern") {
        internPrompt();
      } else if (optionData.option === "Engineer") {
        engineerPrompt();
      } else {
        return;
      }
    });
};

internPrompt = () => {
  console.log("they chose intern");
};

engineerPrompt = () => {
  console.log("They chose engineer");
};

managerPrompt();
