const {addition, subtraction} = require('/workspace/API_Stuff/assets/tests/calc.js')


describe('subtraction', () => {
    test('subtract 5 - 2 to equal 3', () => {
        expect(subtraction(5, 2)).toBe(3);
    });
    test('subtract 9 - 4 to equal 5', () => {
        expect(subtraction(9, 4)).toBe(5);
    });
});

describe('addition', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(addition(1, 2)).toBe(3);
    });
    test('adds 5 + 9 to equal 14', () => {
        expect(addition(5, 9)).toBe(14);
    });
}); 