const Intern = require("../lib/Intern");

//All tests for Intern class

describe("Intern", () => {
  describe("create", () => {
    it("Should create a new intern", () => {
      const intern = new Intern(
        "Paul",
        22,
        "paultayloremail1995@gmail.com",
        "Topeka High"
      );

      expect(intern.name).toEqual("Paul");
      expect(intern.id).toEqual(22);
      expect(intern.email).toEqual("paultayloremail1995@gmail.com");
      expect(intern.school).toEqual("Topeka High");
    });
  });
});

describe("School", () => {
  describe("get", () => {
    it("Should return interns school", () => {
      const intern = new Intern(
        "Paul",
        22,
        "paultayloremail1995@gmail.com",
        "Topeka High"
      );

      expect(intern.getSchool()).toEqual("Topeka High");
    });
  });
});

describe("Role", () => {
  describe("get", () => {
    it("Should return interns role", () => {
      const intern = new Intern(
        "Paul",
        22,
        "paultayloremail1995@gmail.com",
        "Topeka High"
      );

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
