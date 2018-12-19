const add = require('./add');

test('it adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
