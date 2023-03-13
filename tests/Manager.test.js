const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("should set office number via constructor argument", () => {
    const testValue = 100;
    const manager = new Manager("Foo", 1, "test@test.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
  });

  it("should return Manager as role via getRole()", () => {
    const manager = new Manager("Foo", 1, "test@test.com", 100);
    expect(manager.getRole()).toBe("Manager");
  });

  it("should get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const manager = new Manager("Foo", 1, "test@test.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
  });
});
