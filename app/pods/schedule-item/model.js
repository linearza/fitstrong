import DS from 'ember-data';

const GLADIATOR_PILATES = 'gladiator-pilates',
  FITSTRONG_OB = 'fitstrong-ob',
  NO_CLASS = 'no-class';

export {
  GLADIATOR_PILATES, FITSTRONG_OB, NO_CLASS
};

export default DS.Model.extend({

  type: DS.attr('string'),
  description: DS.attr('string'),

  scheduleRow: DS.belongsTo('scheduleRow', {
    inverse: 'scheduleItems',
    async: true
  }),

  title: function() {
    switch (this.get('type')) {
      case GLADIATOR_PILATES:
        return 'gladiator & pilates';
      case FITSTRONG_OB:
        return 'fitstrong (obstacle course)';
      case NO_CLASS:
        return 'no class';
      default:
        return this.get('type');
    }
    return;

  }.property('type'),

});