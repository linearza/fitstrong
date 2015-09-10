import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'table',
  classNames: ['weekly-schedule'],

  schedule: [],

  showSlotInfo: false,

  click(e) {
    let el = e.target.closest('.slot');

    if (!el) {
      return false;
    }

    if (el.classList.contains('is-expanded')) {
      el.classList.remove('is-expanded');
      this.set('showSlotInfo', false);
    } else {
      el.classList.add('is-expanded');
      this.set('showSlotInfo', true);
    }

    return false;
  }

});