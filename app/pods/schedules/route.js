import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('scheduleRow');
  },

  setupController(controller, model) {
    this._super(controller, null);

    controller.setProperties({
      scheduleRows: model
    });
  },

});