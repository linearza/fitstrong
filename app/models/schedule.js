import DS from 'ember-data';

var Schedule = DS.Model.extend({

  start: DS.attr('string', {
    defaultValue: "00:00"
  }),

  end: DS.attr('string', {
    defaultValue: "00:00"
  }),

  period: DS.attr('string', {
    defaultValue: "morning"
  }),

  slots: DS.hasMany('slot', {
    inverse: 'schedule',
    async: true
  })

});

export default Schedule;