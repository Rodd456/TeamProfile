import Employee from '../lib/Employee';

test('initiate new employee and set name', () => {
    const person = new Employee(10, "James", "james@test.com");
    expect(person.name).toBe("James");
});

test('test get id method', () => {
    const person = new Employee(10, "James", "james@test.com");
    expect(person.getId()).toBe(10);
});

test('test get role method', () => {
    const person = new Employee(10, "James", "james@test.com");
    expect(person.getRole()).toBe('Employee');
});
