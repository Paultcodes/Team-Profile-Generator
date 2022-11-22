const Manager = require("../lib/Manager");

//All tests for Manager class

describe("Manager", () => {
  describe("create", () => {
    it("Should create a new manager", () => {
      const manager = new Manager(
        "Paul",
        76,
        "paultayloremail1995@gmail.com",
        7852342344
      );

      expect(manager.name).toEqual(expect.any(String));
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.email).toEqual(expect.any(String));
      expect(manager.officeNumber).toEqual(expect.any(Number));
    });
  });
});

describe("Role", () => {
  describe("get", () => {
    it("Should return managers role", () => {
      const manager = new Manager(
        "Paul",
        76,
        "paultayloremail1995@gmail.com",
        7852342344
      );

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});

describe("Role", () => {
  describe("get", () => {
    it("Should return managers role", () => {
      const manager = new Manager(
        "Paul",
        76,
        "paultayloremail1995@gmail.com",
        7852342344
      );

      expect(manager.getOfficeNumber()).toEqual(7852342344);
    });
  });
});
