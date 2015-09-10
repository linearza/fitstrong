import DS from 'ember-data';

var Schedule = DS.Model.extend({

    start: DS.attr('date', {
        defaultValue: "12:12:12"
    }),

    end: DS.attr('date', {
        defaultValue: "24:24:24"
    }),

    mon: DS.belongsTo('slot', {
        defaultValue: null
    }),
    tue: DS.belongsTo('slot', {
        defaultValue: null
    }),
    wed: DS.belongsTo('slot', {
        defaultValue: null
    }),
    thu: DS.belongsTo('slot', {
        defaultValue: null
    }),
    fri: DS.belongsTo('slot', {
        defaultValue: null
    }),
    sat: DS.belongsTo('slot', {
        defaultValue: null
    })
});

export default Schedule;