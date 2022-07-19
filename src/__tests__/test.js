import healthPerson from '../game';

test('character healthy', () => {
  const person = { name: 'Маг', health: 90 };
  const result = healthPerson(person);
  expect(result).toBe('healthy');
});

test('character wounded', () => {
  const person = { name: 'Маг', health: 40 };
  const result = healthPerson(person);
  expect(result).toBe('wounded');
});

test('character critical', () => {
  const person = { name: 'Маг', health: 12 };
  const result = healthPerson(person);
  expect(result).toBe('critical');
});
