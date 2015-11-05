import DS from 'ember-data';

var ScheduleRow = DS.Model.extend({

  start: DS.attr('string', {
    defaultValue: "00:00"
  }),

  end: DS.attr('string', {
    defaultValue: "00:00"
  }),

  period: DS.attr('string', {
    defaultValue: "morning"
  }),

  scheduleItems: DS.hasMany('scheduleItem', {
    inverse: 'scheduleRow',
    async: true
  })

  // orderedSlots: function() {
  //     this.get('slots').orderBy('createdAt'); /
  // }.property('slots.[]'),


});

export default ScheduleRow;