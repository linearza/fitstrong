import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('schedules-slot', 'Integration | Component | training roster slot', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{schedules-slot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#schedules-slot}}
      template block text
    {{/schedules-slot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});