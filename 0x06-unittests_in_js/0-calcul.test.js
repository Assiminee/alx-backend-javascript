const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('Rounding and calculating the sum of two floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(55.0, 9.0), 64);
    });

    it('Rounding down "a" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(3.4, 7.0), 10);
    });

    it('Rounding up "a" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(3.5, 7.0), 11);
    });

    it('Rounding down both "a" and "b" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(3.4, 7.4), 10);
    });

    it('Rounding up both "a" and "b" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(3.6, 7.6), 12);
    });

    it('Rounding up "a" and rounding down "b" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(4.6, 5.4), 10);
    });

    it('Rounding down "a" and rounding up "b" and calculating the sum', () => {
        assert.strictEqual(calculateNumber(4.4, 5.6), 10);
    });

    it('Rounding up both "a" and "b" with trailing 9\'s and calculating the sum', () => {
        assert.strictEqual(calculateNumber(17.2999, 3.1999), 20);
    });

    it('Rounding up both "a" and "b" with trailing 9\'s and calculating the sum ', () => {
        assert.strictEqual(calculateNumber(33.6999, 6.6999), 41);
    });
});