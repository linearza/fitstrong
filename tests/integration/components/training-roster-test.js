import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schedules', 'Integration | Component | schedules', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{schedules}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#schedules}}
      template block text
    {{/schedules}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});