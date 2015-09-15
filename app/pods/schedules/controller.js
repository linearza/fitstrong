import Ember from 'ember';

export default Ember.Controller.extend({

  // setup attrs
  schedules: [],

  morningSchedules: function() {
    return this.get('schedules').filterBy('period', 'morning');
  }.property('schedules.[]'),

  eveningSchedules: function() {
    return this.get('schedules').filterBy('period', 'evening');
  }.property('schedules.[]')

});