const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  test('getGithub() should return the correct value', () => {
    const eng = new Engineer(10, 'James', 'james@test.com', 'james10');
    expect(eng.getGithub()).toBe('james10');
  });
});
