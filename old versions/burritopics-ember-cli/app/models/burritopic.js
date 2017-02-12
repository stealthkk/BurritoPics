import DS from 'ember-data';

var allPics = [
    {
        id: 1,
        src: 'assets/images/burritos/burrito1.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 2,
        src: 'assets/images/burritos/burrito2.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 3,
        src: 'assets/images/burritos/burrito3.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 4,
        src: 'assets/images/burritos/burrito4.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 5,
        src: 'assets/images/burritos/burrito5.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 6,
        src: 'assets/images/burritos/burrito6.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 7,
        src: 'assets/images/burritos/burrito7.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 8,
        src: 'assets/images/burritos/burrito8.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 9,
        src: 'assets/images/burritos/burrito9.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 10,
        src: 'assets/images/burritos/burrito10.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 11,
        src: 'assets/images/burritos/burrito11.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 12,
        src: 'assets/images/burritos/burrito12.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 13,
        src: 'assets/images/burritos/burrito13.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 14,
        src: 'assets/images/burritos/burrito14.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 15,
        src: 'assets/images/burritos/burrito15.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    },
    {
        id: 16,
        src: 'assets/images/burritos/burrito16.jpeg',
        alt: 'A burrito!!1',
        title: 'A burrito!!1'
    }
      ];

var burritopic = DS.Model.extend({
    src: DS.attr('string'),
    alt: DS.attr('string'),
    title: DS.attr('string')
});

burritopic.reopenClass({
  FIXTURES: allPics
});

export default burritopic;