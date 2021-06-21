const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('soma 1 + 2 deve ser 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('atribuição de objs', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});