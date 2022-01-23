import demo from '../app';

test('test demo', () => {
  const received = demo(10);
  const result = 20;
  expect(received).toBe(result);
});
