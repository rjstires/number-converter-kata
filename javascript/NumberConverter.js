const { both, compose, cond, equals, filter, ifElse, isNil, map, not, pick, join, lensIndex, over, prop, reduce, reject, reverse, set, splitEvery, tap, toString, trim, view, when } = require('ramda');
const createNumberSet = require('./CreateNumberSet.js');

//- Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
//- Use this to learn TDD
const _ = undefined;
const first = [_, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = [_, _, 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const getDigitCount = (number) => {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}

const getDigit = (number, n, fromLeft) => {
  const location = fromLeft ? getDigitCount(number) + 1 - n : n;
  return Math.floor((number / Math.pow(10, location - 1)) % 10);
}

const debug = tap(console.log);

const isZero = (sets) => sets.length === 1 && sets[0].value === 0;

const isOneToNineteen = ({ value }) => value >= 1 && value < 20;

const isTwentyToNinetyNine = ({ value }) => value >= 20 && value < 100;

const isOverOneHundred = ({ value }) => value >= 100;

const handleZero = (sets) => 'zero';

const handleOneToNineteen = ({ value, ...rest }) => ({
  string: first[value], value, ...rest
});

const handleTwentyToNinetyNine = ({ value, ...rest }) => ({
  string: (value % 10 === 0) ? tens[getDigit(value, getDigitCount(value))] : `${tens[getDigit(value, 2)]}-${first[getDigit(value, 1)]}`,
  value,
  ...rest
});

const handleOverOneHundred = ({ value, ...rest }) => ({
  string: (value % 100 === 0) ? `${first[getDigit(value, 3)]} hundred` : `${first[getDigit(value, 3)]} hundred ${toWords(parseInt(`${getDigit(value, 2)}${getDigit(value, 1)}`))}`,
  value,
  ...rest
});


const createStringValue = compose(
  cond([
    [isOneToNineteen, handleOneToNineteen],
    [isTwentyToNinetyNine, handleTwentyToNinetyNine],
    [isOverOneHundred, handleOverOneHundred]
  ])
);

const placeIsNotHundred = compose(not, equals('hundred'), prop('place'));

const addPlaceToString = when(
  placeIsNotHundred,
  ({ string, place, ...rest }) => ({
    string: `${string} ${place}`,
    place,
    ...rest
  })
);

const handleNonZero = compose(
  join(' '),
  map(
    compose(
      prop('string'),
      addPlaceToString,
      createStringValue
    )
  ),
  reject(({ value }) => value === 0) // Filter out sets of 000s
);

const toWords = compose(
  ifElse(isZero, handleZero, handleNonZero),
  createNumberSet
);

module.exports = toWords;