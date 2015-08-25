import Ember from 'ember';

export default Ember.Controller.extend({

  isMenuExpanded: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuExpanded');
    }
  }
});