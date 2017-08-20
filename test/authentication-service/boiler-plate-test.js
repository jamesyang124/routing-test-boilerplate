import fetch from 'node-fetch';

test('node-fetch http client', () => {
  return fetch('https://github.com/')
    .then(res => res.text())
    .then(text => expect(text).toBeDefined());
})
