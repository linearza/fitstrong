import Ember from 'ember';

const {
  RSVP
} = Ember;

export default Ember.Route.extend({

  model: function() {
    return RSVP.hash({
      schedules: this.store.findAll('schedule'),
      slots: this.store.findAll('slot')
    });
  }

});