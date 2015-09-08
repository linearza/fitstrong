import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weekly-schedule', 'Integration | Component | weekly schedule', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weekly-schedule}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weekly-schedule}}
      template block text
    {{/weekly-schedule}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
