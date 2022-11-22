const inquirer = require("inquirer");
const fs = require("fs");
const html = require("./src/templateCode");
const emailValidator = require("email-validator");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const { type } = require("os");

//Empty array to store the created employees
let listOfWorkers = [];

//Inquirer to create a manager
managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Managers Name:",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "Please enter the managers name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Managers ID:",
        validate: async (checkName) => {
          if (isNaN(checkName)) {
            return "ID can only be numbers";
          } else if (!checkName) {
            return "You must enter a ID number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Managers Email:",
        validate: async (checkName) => {
          if (emailValidator.validate(checkName)) {
            return true;
          } else {
            return "Please enter a valid email";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Managers Office Number:",
        validate: async (checkOfficeNumber) => {
          if (isNaN(checkOfficeNumber)) {
            return "Phone number must be 10 DIGITS";
          } else if (checkOfficeNumber.length !== 10) {
            return "Phone number must be 10 digits long";
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      listOfWorkers.push(manager);
      continuePrompt();
    });
};
//Inquirer prompt asking what the user would like to do next
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
//Inquirer to create a intern
internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Interns name:",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "Please enter the interns name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Interns ID:",
        validate: async (checkName) => {
          if (isNaN(checkName)) {
            return "Please enter a valid ID number";
          } else if (!checkName) {
            return "Please enter a valid ID number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Interns email:",
        validate: async (checkName) => {
          if (emailValidator.validate(checkName)) {
            return true;
          } else {
            return "Please enter a valid email";
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Interns school:",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "You must enter the interns school";
          }
        },
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
      listOfWorkers.push(intern);
      continuePrompt();
    });
};
//Inquirer to create a engineer
engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineers name:",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "Please enter engineers name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Engineers ID:",
        validate: async (checkName) => {
          if (isNaN(checkName)) {
            return "ID must be a number";
          } else if (!checkName) {
            return "You must enter a ID number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Engineers email:",
        validate: async (checkName) => {
          if (emailValidator.validate(checkName)) {
            return true;
          } else {
            return "Please enter a valid email";
          }
        },
      },
      {
        type: "input",
        name: "githubLink",
        message: "Paste the URL to your GitHub Profile",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "Please enter the URL to the engineers GitHub";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Engineers GitHub:",
        validate: async (checkName) => {
          if (checkName) {
            return true;
          } else {
            return "Please enter the engineers GitHub profile name";
          }
        },
      },
    ])
    .then((engineerData) => {
      const { name, id, email, githubLink, github } = engineerData;
      const engineer = new Engineer(name, id, email, githubLink, github);
      listOfWorkers.push(engineer);
      continuePrompt();
    });
};
//Function to write html file
completeHtml = (allInfo) => {
  fs.writeFile("./dist/main.html", allInfo, (err) =>
    err ? console.log(err) : console.log("Your Team Was Successfully Created!")
  );
};

managerPrompt();
