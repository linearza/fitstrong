import Ember from 'ember';

const {
  RSVP
} = Ember;

export default Ember.Route.extend({

  model: function() {
    var model = RSVP.hash({
      schedules: this.store.findAll('schedule'),
      slots: this.store.findAll('slot')
    });
    return model;
  },

  setupController(controller, model) {
    this._super(controller, []);

    controller.setProperties({
      schedules: model.schedules,
      slots: model.slots
    });
  },

});