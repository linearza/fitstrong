import DS from 'ember-data';

export default DS.Model.extend({

  type: DS.attr('string', {
    defaultValue: null
  }),

  title: DS.attr('string', {
    defaultValue: null
  }),

  description: DS.attr('string', {
    defaultValue: null
  }),

  optionA: DS.attr('string', {
    defaultValue: null
  }),

  optionAPrice: DS.attr('string', {
    defaultValue: null
  }),

  optionB: DS.attr('string', {
    defaultValue: null
  }),

  optionBPrice: DS.attr('string', {
    defaultValue: null
  })

});