const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Constructor", () => {
    it("should set school when created", () => {
      const testValue = "UCLA";
      const intern = new Intern("Foo", 1, "test@test.com", testValue);
      expect(intern.school).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("Foo", 1, "test@test.com", "UCLA");
      expect(intern.getRole()).toBe("Intern");
    });
  });

  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const testValue = "UCLA";
      const intern = new Intern("Foo", 1, "test@test.com", testValue);
      expect(intern.getSchool()).toBe(testValue);
    });
  });
});
