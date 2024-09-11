import _ from 'lodash';

test('Lodash join works correctly', () => {
  expect(_.join(['Build', 'Tools'], ' ')).toBe('Build Tools');
});