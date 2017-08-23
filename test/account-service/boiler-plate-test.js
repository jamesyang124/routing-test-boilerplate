import fetch from 'node-fetch';

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('node-fetch http client', async () => {
  const requestBody = {
    "account" : {
      "email" : "reilly.koss@yahoo.com",
      "password" : "ZGgbzdnp05BpN3INoNy1oDx1wqg1kCmWZ0W87GOnj0Pg7QY1k8KO6y28z6s636Uq4InhOcT9vKJ",
      "languageCode" : "ga-IE",
      "firstName" : "Derick",
      "lastName" : "Zboncak",
      "contactPhoneNumber" : "(472) 072-8608",
      "companyName" : "Bechtelar, Bechtelar and Bechtelar",
      "companyAddress" : "3462 Lavern Junction",
      "companyLocation" : "VC",
      "taxId" : "471-56-8595",
      "numberOfEmployees" : 1
    },
    "captcha" : {
      "imageKey" : "c6805bb45b03dd01875a89e801c408626d5ab0db",
      "response" : "835-72-4406"
    }
  };
  const opts = { method: 'POST', body: JSON.stringify(requestBody), headers: {'Content-Type': 'application/json'}};
  const res = await fetch('http://localhost:9080/api/authentication/v1/business/accounts/htc/sign-up-email', opts);
  expect(res.status).toEqual(204);
})
