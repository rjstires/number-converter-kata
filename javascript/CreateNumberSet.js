const { compose, map, splitAt, toString } = require('ramda');

const splitEveryReverse = (n) => (list) => {
    if (n <= 0) {
        throw new Error('First argument to splitEveryReverse must be a positive integer');
    }
    let result = [];
    let idx = list.length;
    while (idx > 0) {
        result.unshift(list.slice(Math.max(idx -= n, 0), idx + n));
    }
    return result;
};

const createNumberSet = compose(
    map(
        compose(
            map((x) => parseInt(x)),
            (set) => {
                if (set.length < 3) {
                    return [set];
                }
                return splitAt(1, set);
            })),

    splitEveryReverse(3),
    toString
);


module.exports = createNumberSet;
