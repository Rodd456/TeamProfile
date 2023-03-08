const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('getOfficeNumber', () => {
    it('should return the office number of the Manager', () => {
      const manager = new Manager(10, "James", "james@test.com", 2);
      expect(manager.getOfficeNumber()).toBe(2);
    });
  });
});
