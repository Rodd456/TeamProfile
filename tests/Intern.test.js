const Intern = require('../lib/Intern');

test('test get school name', () => {
    const intern = new Intern(10, "James", "james@test.com", "University of California, Berkeley");
    expect(intern.school).toBe('University of California, Berkeley');
});
