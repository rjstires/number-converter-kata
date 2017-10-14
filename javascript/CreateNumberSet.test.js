const CreateNumberSet = require('./CreateNumberSet');

test('0', () => {
    expect(CreateNumberSet(0)).toEqual([{ value: 0, place: 'hundred' }]);
});

test('single digit (1 - 9)', () => {
    expect(CreateNumberSet(1)).toEqual([{ value: 1, place: 'hundred' }]);
    expect(CreateNumberSet(9)).toEqual([{ value: 9, place: 'hundred' }]);
});

test('double digit under twenty (10 - 19)', () => {
    expect(CreateNumberSet(10)).toEqual([{ value: 10, place: 'hundred' }]);
    expect(CreateNumberSet(19)).toEqual([{ value: 19, place: 'hundred' }]);
});

test('multiples of ten (10, 50, 90)', () => {
    expect(CreateNumberSet(10)).toEqual([{ value: 10, place: 'hundred' }]);
    expect(CreateNumberSet(90)).toEqual([{ value: 90, place: 'hundred' }]);
});

test('not multiples of ten (21-99)', () => {
    expect(CreateNumberSet(21)).toEqual([{ value: 21, place: 'hundred' }]);
    expect(CreateNumberSet(55)).toEqual([{ value: 55, place: 'hundred' }]);
    expect(CreateNumberSet(99)).toEqual([{ value: 99, place: 'hundred' }]);
});

test('hundreds (100, 500, 900)', () => {
    expect(CreateNumberSet(100)).toEqual([{ value: 100, place: 'hundred' }]);
    expect(CreateNumberSet(900)).toEqual([{ value: 900, place: 'hundred' }]);
});

test('not multiples of one hundred (101-999)', () => {
    expect(CreateNumberSet(101)).toEqual([{ value: 101, place: 'hundred' }]);
    expect(CreateNumberSet(999)).toEqual([{ value: 999, place: 'hundred' }]);
  });

test('thousands (1000, 5000, 9000)', () => {
    expect(CreateNumberSet(1000)).toEqual([{ value: 1, place: 'thousand' }, { value: 0, place: 'hundred' }]);
    expect(CreateNumberSet(9000)).toEqual([{ value: 9, place: 'thousand' }, { value: 0, place: 'hundred' }]);
});

test('not even thousands (9999, 9911)', () => {
    expect(CreateNumberSet(9999)).toEqual([{ value: 9, place: 'thousand' }, { value: 999, place: 'hundred' }]);
    expect(CreateNumberSet(9911)).toEqual([{ value: 9, place: 'thousand' }, { value: 911, place: 'hundred' }]);
});

test('tens of thousands (10,000, 19,000)', () => {
    expect(CreateNumberSet(10000)).toEqual([{ value: 10, place: 'thousand' }, { value: 0, place: 'hundred' }]);
    expect(CreateNumberSet(19000)).toEqual([{ value: 19, place: 'thousand' }, { value: 0, place: 'hundred' }]);
});

test('tens of thousands and some (19,999)', () => {
    expect(CreateNumberSet(19999)).toEqual([{ value: 19, place: 'thousand' }, { value: 999, place: 'hundred' }]);
});

test('hundred thousand (100,000, 700,000)', () => {
    expect(CreateNumberSet(100000)).toEqual([{ value: 100, place: 'thousand' }, { value: 0, place: 'hundred' }]);
    expect(CreateNumberSet(700000)).toEqual([{ value: 700, place: 'thousand' }, { value: 0, place: 'hundred' }]);
});

test('not exactly hundred thousand (198,000, 701,020)', () => {
    expect(CreateNumberSet(198000)).toEqual([{ value: 198, place: 'thousand' }, { value: 0, place: 'hundred' }]);
    expect(CreateNumberSet(701020)).toEqual([{ value: 701, place: 'thousand' }, { value: 20, place: 'hundred' }]);
});

test('millions (1,000,000)', () => {
    expect(CreateNumberSet(1000000)).toEqual([{ value: 1, place: 'million' }, { value: 0, place: 'thousand' }, { value: 0, place: 'hundred' }]);
});
