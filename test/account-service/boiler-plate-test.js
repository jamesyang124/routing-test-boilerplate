import fetch from 'node-fetch';

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('node-fetch http client', async () => {
  const res = await fetch('https://github.com/');
  const text = await res.text();
  expect(text).toBeDefined();
})
