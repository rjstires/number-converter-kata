const {
  both, compose, cond,
  equals, filter, isNil,
  map, join, lensIndex,
  over, reduce, reject,
  reverse, set, splitEvery,
  tap, toString, trim,
  view
} = require('ramda');
//- Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
//- Use this to learn TDD
const _ = undefined;
const first = [_, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = [_, _, 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const places = [_, 'thousand', 'million']

const getDigitCount = (number) => {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}

const getDigit = (number, n, fromLeft) => {
  const location = fromLeft ? getDigitCount(number) + 1 - n : n;
  return Math.floor((number / Math.pow(10, location - 1)) % 10);
}

const debug = tap(console.log);

// const valueLens = lensIndex(0);
// const getValue = view(valueLens);
// const setValue = set(valueLens);
// const updateValue = over(valueLens);

// const indexLens = lensIndex(1);
// const getIndex = view(indexLens);
// const setIndex = set(indexLens);
// const updateIndex = over(indexLens);

// const arrayLens = lensIndex(2);
// const getArray = view(arrayLens);
// const setArray = set(arrayLens);
// const updateArray = over(arrayLens);

const isZero = ([value, index, array]) => value === 0 && array.length === 1;
const isOneToNineteen = ([value, index, array]) => value >= 1 && value < 20;
const isTwentyToNinetyNine = ([value, index, array]) => value >= 20 && value < 100;
const isOverOneHundred = ([value, index, array]) => value >= 100;

const handleZero = ([value, index, array]) => 'zero';

const handleOneToNineteen = ([value, index, array]) => first[value];

const handleTwentyToNinetyNine = ([value, index, array]) => (value % 10 === 0)
  ? tens[getDigit(value, getDigitCount(value))]
  : `${tens[getDigit(value, 2)]}-${first[getDigit(value, 1)]}`;

const handleOverOneHundred = ([value, index, array]) => (value % 100 === 0)
  ? `${first[getDigit(value, 3)]} hundred`
  : `${first[getDigit(value, 3)]} hundred ${toWords(parseInt(`${getDigit(value, 2)}${getDigit(value, 1)}`))}`;

const handler = cond([
  [isZero, () => 'zero'],
  [isOneToNineteen, handleOneToNineteen],
  [isTwentyToNinetyNine, handleTwentyToNinetyNine],
  [isOverOneHundred, handleOverOneHundred]
])

const x = compose(
  handler,
  ([value, index, array]) => [parseInt(value), index, array],
);

const intoSets = compose(
  map(reverse),
  reverse,
  splitEvery(3),
  reverse
);

const addPlaces = compose(
  reverse,
  map(trim),
  reject(isNil),
  (set) => set.map((value, index) => {
    const place = places[index];
    return (place && value) ? `${value} ${place}` : value;
  }),
  reverse
);
const toWords = compose(
  join(' '),
  addPlaces,
  (set) => set.map((val, index, array) => (val === '000') ? null : x([val, index, array])),
  intoSets,
  toString
);

module.exports = toWords;
