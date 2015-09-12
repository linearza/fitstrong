import Ember from 'ember';

const {
  computed, alias
} = Ember;

export default Ember.Component.extend({

  tagName: 'td',
  classNameBindings: [':slot', 'type'],

  content: [],
  type: Ember.computed.alias('content.type'),

  title: function() {
    switch (this.get('type')) {
      case 'gladiator-pilates':
        return 'gladiator & pilates';
      case 'fitstrong-ob':
        return 'fitstrong (obstacle course)';
      case 'no-class':
        return 'no class';
      default:
        return this.get('type');
    }
    return;

  }.property('type'),

  click(e) {
    let el = this.get('element');

    if (!el) {
      return false;
    }

    if (el.classList.contains('is-expanded')) {
      el.classList.remove('is-expanded');
    } else {
      el.classList.add('is-expanded');
    }

    return false;
  }

});