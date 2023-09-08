const axios = require('axios');
const assert = require('assert');

// Describe the test suite, providing a clear title or description.
describe('GitHub API Status 200', () => {
    //Description for Test Case
  it('Github API status should be 200', async () => {
    const response = await axios.get('https://api.github.com/users/IshanPhadte776');

    assert.strictEqual(response.status, 200);

    assert.strictEqual(response.data.login, 'IshanPhadte776');
    assert.strictEqual(typeof response.data.id, 'number');

    //console.log(response.data);
  });
});