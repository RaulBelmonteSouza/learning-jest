const { test, expect } = require('@jest/globals');
const sum = require('./sum');

test('sum 1 + 2 deve ser 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('atribuição de objs', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('testando negação de teste', () => {
    for(let a = 1; a <= 10; a++) {
        for(let b = 1; b <= 10; b++) {
            expect(a+b).not.toBe(0);
        }
    }
})