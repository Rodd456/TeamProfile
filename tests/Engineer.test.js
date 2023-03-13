const Engineer = require("../lib/Engineer");

const testValue = "GitHubUser";

test("Engineer constructor should set GitHub account", () => {
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getRole()).toBe(`${testValue}`);
});

test("getGithub() should return the GitHub username", () => {
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
