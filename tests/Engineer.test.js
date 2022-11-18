const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("create", () => {
    it("Should create a new engineer", () => {
      const engineer = new Engineer(
        "Paul",
        44,
        "paultayloremail1995@gmail.com",
        "https://github.com/",
        "Paultcodes"
      );

      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.githubLink).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  });
});

describe("Github", () => {
  describe("get", () => {
    it("Should return engineers github", () => {
      const engineer = new Engineer(
        "Paul",
        44,
        "paultayloremail1995@gmail.com",
        "https://github.com/",
        "Paultcodes"
      );

      expect(engineer.getGithub()).toEqual("Paultcodes");
    });
  });
});

describe("Role", () => {
  describe("get", () => {
    it("Should return engineers role", () => {
      const engineer = new Engineer(
        "Paul",
        44,
        "paultayloremail1995@gmail.com",
        "https://github.com/",
        "Paultcodes"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
