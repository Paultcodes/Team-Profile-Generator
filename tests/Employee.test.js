const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("create", () => {
    it("Should create a new employee", () => {
      const employee = new Employee(
        "Paul",
        32,
        "paultayloremail1995@gmail.com"
      );

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });
});

describe("Name", () => {
  describe("get", () => {
    it("It should get the name of employee", () => {
      const employee = new Employee(
        "Paul",
        32,
        "paultayloremail1995@gmail.com"
      );

      expect(employee.getName()).toEqual("Paul");
    });
  });
});

describe("ID", () => {
  describe("get", () => {
    it("It should get the id of employee", () => {
      const employee = new Employee(
        "Paul",
        32,
        "paultayloremail1995@gmail.com"
      );

      expect(employee.getId()).toEqual(32);
    });
  });
});

describe("Email", () => {
  describe("get", () => {
    it("It should get the email of employee", () => {
      const employee = new Employee(
        "Paul",
        32,
        "paultayloremail1995@gmail.com"
      );

      expect(employee.getEmail()).toEqual("paultayloremail1995@gmail.com");
    });
  });
});

describe("Role", () => {
  describe("get", () => {
    it("It should get the role of employee", () => {
      const employee = new Employee(
        "Paul",
        32,
        "paultayloremail1995@gmail.com"
      );

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
