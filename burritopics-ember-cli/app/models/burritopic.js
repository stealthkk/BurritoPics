import DS from "ember-data";

var Burritopic = DS.Model.extend({
    src: DS.attr('string'),
    alt: DS.attr('string'),
    title: DS.attr('string')
});

Burritopic.FIXTURES = [
    {
        id: 1,
        src: 'burrito1.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 2,
        src: 'burrito2.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 3,
        src: 'burrito3.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 4,
        src: 'burrito4.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 5,
        src: 'burrito5.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 6,
        src: 'burrito6.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 7,
        src: 'burrito7.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 8,
        src: 'burrito8.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 9,
        src: 'burrito9.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 10,
        src: 'burrito10.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 11,
        src: 'burrito11.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 12,
        src: 'burrito12.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 13,
        src: 'burrito13.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 14,
        src: 'burrito14.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 15,
        src: 'burrito15.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 16,
        src: 'burrito16.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    }
];

export default Burritopic;
