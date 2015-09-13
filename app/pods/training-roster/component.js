import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'table',
  classNames: ['training-roster'],

  schedules: [],

  morningSchedules: function() {
    return this.get('schedules').filterBy('period', 'morning');
  }.property('schedules.[]'),

  eveningSchedules: function() {
    return this.get('schedules').filterBy('period', 'evening');
  }.property('schedules.[]')


});