import Ember from 'ember';

export default Ember.Controller.extend({

  // setup attrs
  scheduleRows: [],

  morningSchedules: function() {
    console.log('>>>', this.get('scheduleRows').filterBy('period', 'morning'));
    return this.get('scheduleRows').filterBy('period', 'morning');
  }.property('scheduleRows.[]'),

  eveningSchedules: function() {
    return this.get('scheduleRows').filterBy('period', 'evening');
  }.property('scheduleRows.[]')

});