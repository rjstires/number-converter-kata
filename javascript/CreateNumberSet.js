const { compose, lensProp, map, objOf, reverse, set, splitEvery, toString } = require('ramda');
const places = ['hundred', 'thousand', 'million']

const valueLens = lensProp('value');

const creatNumericSets = compose(
    reverse,
    (sets) => sets.map((value, index) => {
        return {
            value: parseInt(reverse(value)),
            place: places[index]
        }
    }),
    splitEvery(3),
    reverse,
    toString
);

module.exports = creatNumericSets;
