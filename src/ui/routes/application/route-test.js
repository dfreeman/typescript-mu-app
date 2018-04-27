import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ApplicationRoute from './route';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('the test is compiled', function(assert) {
    assert.ok(ApplicationRoute);
  });
});
