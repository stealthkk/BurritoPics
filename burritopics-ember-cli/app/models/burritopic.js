import DS from 'ember-data';

export default DS.Model.extend({
    src: DS.attr('string'),
    alt: DS.attr('string'),
    title: DS.attr('string')
});
