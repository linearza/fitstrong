import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNameBindings: [':schedule-item', 'scheduleItem.type'],

  scheduleItem: null,

  click() {
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