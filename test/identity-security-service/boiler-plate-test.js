import fetch from 'node-fetch';
import FormData from 'form-data';

const form = new FormData();

test('node-fetch http client', async () => {
  form.append('a', 1);

  const res = await fetch('http://httpbin.org/post', { method: 'POST', body: form, headers: form.getHeaders() });
  const json = await res.json();

  expect(json).toBeDefined();
})
