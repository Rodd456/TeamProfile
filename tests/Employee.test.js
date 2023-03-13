const Employee = require("../lib/Employee");

// Test if an instance of the Employee class can be created
test("Employee instance can be instantiated", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

// Test if the name can be set via constructor argument
test("Employee name can be set via constructor argument", () => {
  const name = "Alice";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

// Test if the id can be set via constructor argument
test("Employee id can be set via constructor argument", () => {
  const id = 100;
  const employee = new Employee("Foo", id);
  expect(employee.id).toBe(id);
});

// Test if the email can be set via constructor argument
test("Employee email can be set via constructor argument", () => {
  const email = "test@test.com";
  const employee = new Employee("Foo", 1, email);
  expect(employee.email).toBe(email);
});

// Test if the name can be retrieved via getName() method
test("Employee name can be retrieved via getName() method", () => {
  const name = "Alice";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

// Test if the id can be retrieved via getId() method
test("Employee id can be retrieved via getId() method", () => {
  const id = 100;
  const employee = new Employee("Foo", id);
  expect(employee.getId()).toBe(id);
});

// Test if the email can be retrieved via getEmail() method
test("Employee email can be retrieved via getEmail() method", () => {
  const email = "test@test.com";
  const employee = new Employee("Foo", 1, email);
  expect(employee.getEmail()).toBe(email);
});

// Test if the getRole() method returns "Employee"
test("getRole() method returns \"Employee\"", () => {
  const role = "Employee";
  const employee = new Employee("Alice", 1, "test@test.com");
  expect(employee.getRole()).toBe(role);
});
