import DS from 'ember-data';

export default DS.Model.extend({

  type: DS.attr('string'),
  description: DS.attr('string'),

  schedule: DS.belongsTo('schedule', {
    inverse: 'slots',
    async: true
  })

});