const { compose, cond, ifElse, isEmpty, map, join, reject } = require('ramda');
const createNumberSet = require('./CreateNumberSet.js');

// - Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
// - Use this to learn TDD
const first = [
  undefined, 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen',
];
const tens = [
  undefined, undefined, 'twenty',
  'thirty', 'fourty', 'fifty',
  'sixty', 'seventy', 'eighty',
  'ninety',
];
const places = [undefined, 'thousand', 'million'];
const hundred = 'hundred';

const getDigitCount = (number) => {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
};

const getDigit = (number, n, fromLeft) => {
  const location = fromLeft ? getDigitCount(number) + 1 - n : n;
  return Math.floor((number / Math.pow(10, location - 1)) % 10);
};

const isZero = (sets) => sets.length === 1 && sets[0][0] === 0;

const isOneToNineteen = (value) => value >= 1 && value < 20;

const isTwentyToNinetyNine = (value) => value >= 20 && value < 100;

const isOverOneHundred = (value) => value >= 100;

const handleZero = () => 'zero';

const handleOneToNineteen = (value) => first[value];

const handleTwentyToNinetyNine = (value) => (value % 10 === 0)
  ? tens[getDigit(value, getDigitCount(value))]
  : `${tens[getDigit(value, 2)]}-${first[getDigit(value, 1)]}`;

const handleOverOneHundred = (value) => `${first[getDigit(value, 3)]}`;


const createStringValue = compose(
  cond([
    [isOneToNineteen, handleOneToNineteen],
    [isTwentyToNinetyNine, handleTwentyToNinetyNine],
    [isOverOneHundred, handleOverOneHundred],
    [() => true, () => ''],
  ])
);
const composeSet = compose(
  join(' '),
  reject(isEmpty),
  (set) => set.map((value, index, array) =>
    (value && array.length > 1 && index === 0)
      ? `${value} ${hundred}`
      : value),
  map(createStringValue)
);

const handleNonZero = compose(
  join(' '),
  reject(isEmpty),
  (groups) => groups.map((value, index, array) => {
    const idx = array.length - (index + 1);
    const place = places[idx];
    return (place && value) ? `${value} ${place}` : value;
  }),
  map(composeSet)
);

const toWords = compose(
  ifElse(isZero, handleZero, handleNonZero),
  createNumberSet
);

module.exports = toWords;
