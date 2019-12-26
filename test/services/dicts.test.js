const assert = require('assert');
const app = require('../../src/app');

describe('\'dicts\' service', () => {
  it('registered the service', () => {
    const service = app.service('dicts');

    assert.ok(service, 'Registered the service');
  });
});
