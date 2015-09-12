import Ember from 'ember';

export default Ember.Controller.extend({

  // setup attrs
  schedules: [],

  actions: {

    add() {

      let schedule = this.get('schedules.firstObject');

      let slot = this.store.createRecord('slot', {
        description: 'whatever',
        schedule: schedule,
        title: 'New slot'
      });

      slot.save().then(slot => {
        schedule.get('slots').addObject(slot);
        schedule.save();
      });

    }

  }

});