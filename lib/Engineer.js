const Employee = require("./Employee");
//Engineer class

class Engineer extends Employee {
  constructor(name, id, email, githubLink, github) {
    super(name, id, email);

    this.github = github;
    this.githubLink = githubLink;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
