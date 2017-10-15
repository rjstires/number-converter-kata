const CreateNumberSet = require('./CreateNumberSet');

test(0, () => {
    expect(CreateNumberSet(0)).toEqual([[0]]);
});

test('single digit (1 - 9)', () => {
    expect(CreateNumberSet(1)).toEqual([[1]]);
    expect(CreateNumberSet(9)).toEqual([[9]]);
});

test('double digit under twenty (10 - 19)', () => {
    expect(CreateNumberSet(10)).toEqual([[10]]);
    expect(CreateNumberSet(19)).toEqual([[19]]);
});

test('multiples of ten (10, 50, 90)', () => {
    expect(CreateNumberSet(10)).toEqual([[10]]);
    expect(CreateNumberSet(90)).toEqual([[90]]);
});

test('not multiples of ten (21-99)', () => {
    expect(CreateNumberSet(21)).toEqual([[21]]);
    expect(CreateNumberSet(55)).toEqual([[55]]);
    expect(CreateNumberSet(99)).toEqual([[99]]);
});

test('hundreds (100, 500, 900)', () => {
    expect(CreateNumberSet(100)).toEqual([[1, 0]]);
    expect(CreateNumberSet(900)).toEqual([[9, 0]]);
});

test('not multiples of one hundred (101-999)', () => {
    expect(CreateNumberSet(101)).toEqual([[1, 1]]);
    expect(CreateNumberSet(999)).toEqual([[9, 99]]);
});

test('thousands (1000, 5000, 9000)', () => {
    expect(CreateNumberSet(1000)).toEqual([ [1], [0, 0]]);
    expect(CreateNumberSet(9000)).toEqual([[9], [0, 0]]);
});

test('not even thousands (9999, 9911)', () => {
    expect(CreateNumberSet(9999)).toEqual([[9],[9, 99]]);
    expect(CreateNumberSet(9911)).toEqual([[9], [9, 11]]);
});

test('tens of thousands (10,000, 19,000)', () => {
    expect(CreateNumberSet(10000)).toEqual([[10], [0, 0]]);
    expect(CreateNumberSet(19000)).toEqual([[19], [0, 0]]);
});

test('tens of thousands and some (19,999)', () => {
    expect(CreateNumberSet(19999)).toEqual([[19], [9, 99]]);
});

test('hundred thousand (100,000, 700,000)', () => {
    expect(CreateNumberSet(100000)).toEqual([[1, 0], [0, 0]]);
    expect(CreateNumberSet(700000)).toEqual([[7, 0], [0, 0]]);
});

test('not exactly hundred thousand (198,000, 701,020)', () => {
    expect(CreateNumberSet(198000)).toEqual([[1, 98], [0, 0]]);
    expect(CreateNumberSet(701020)).toEqual([[7, 1], [0, 20]]);
});

test('millions (1,000,000)', () => {
    expect(CreateNumberSet(1000000)).toEqual([[1], [0, 0], [0, 0]]);
});
