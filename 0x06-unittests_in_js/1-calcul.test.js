const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
        it('Sum of two positive floating point whole numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 13.0, 7.0), 20);
        });

        it('Positive Sum: Round up "a", round down "b"', () => {
            assert.strictEqual(calculateNumber('SUM', 13.6, 7.3), 21);
        });

        it('Positive Sum: Round down "a", round up "b"', () => {
            assert.strictEqual(calculateNumber('SUM', 13.3, 7.6), 21);
        });

        it('Positive Sum: Round up "a"', () => {
            assert.strictEqual(calculateNumber('SUM', 13.6, 7.0), 21);
        });

        it('Positive Sum: Round down "a"', () => {
            assert.strictEqual(calculateNumber('SUM', 13.3, 7.0), 20);
        });

        it('Negative Sum: equal numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -7.0, -7.0), -14);
        });

        it('Negative Sum: different values', () => {
            assert.strictEqual(calculateNumber('SUM', -98.3, -1.8), -100);
        });

        it('Positive Sum: negative "a" positive "b" (a > b)', () => {
            assert.strictEqual(calculateNumber('SUM', -13.0, 15.0), 2);
        });

        it('Negative Sum: negative "a" positive "b" (a < b)', () => {
            assert.strictEqual(calculateNumber('SUM', -13.0, 2.0), -11);
        });

        it('Equals zero: negative "a" positive "b"', () => {
            assert.strictEqual(calculateNumber('SUM', -13.0, 13.0), 0);
        });

        it('Equals zero: negative "b" positive "a"', () => {
            assert.strictEqual(calculateNumber('SUM', 13.0, -13.0), 0);
        });

        it('Sum of zeros', () => {
            assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
        });
    });

    describe('type == "SUBTRACT"', () => {

        it('Sub of two positive floating point whole numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 10.0, 7.0), 3);
        });

        it('Positive Sub: Round up "a", round down "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 13.6, 4.3), 10);
        });

        it('Positive Sub: Round down "a", round up "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 13.3, 2.6), 10);
        });

        it('Positive Sub: Round up "a"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 13.6, 4.0), 10);
        });

        it('Positive Sub: Round down "a"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 13.3, 10.0), 3);
        });

        it('Negative Sub: different values', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -98.3, -1.8), -96);
        });

        it('Negative Sub: negative "a" positive "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -13.0, 15.0), -28);
        });

        it('Sub of zeros', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
        });

        it('Equals zero: same value for both numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 17.0, 17.0), 0);
        });

        it('Equals zero: same value for both numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -17.0, -17.0), 0);
        });

        it('Negative sub: negative "a" positive "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -17.0, 17.0), -34);
        });

        it('Positive sub: positive "a" negative "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 17.0, -17.0), 34);
        });

        it('Negative result: negative "a" positive "b"', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -17.0, 1.0), -18);
        });
    });

    describe('type == "DIVIDE"', () => {
        it('Positive result: positive "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 24.0, 2.0), 12.0);
        });

        it('Negative result: negative "a" positive "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -13.0, 2.0), -6.5);
        });

        it('Negative result: positive "a" negative "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 13.0, -2.0), -6.5);
        });

        it('Positive result: negative "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -13.0, -2.0), 6.5);
        });

        it('Positive result: positive "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 13.0, 2.0), 6.5);
        });

        it('Positive result: equal "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 122.0, 122.0), 1);
        });

        it('Negative result: equal "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -122.0, -122.0), 1);
        });

        it('Positive result: equal rounded up "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 33.6, 34.0), 1);
        });

        it('Positive result: equal rounded down "a" and "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 34.4, 34.0), 1);
        });

        it('Equals zero: a = 0 and positive "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 109.0), 0);
        });

        it('Equals negative zero: a = 0 and positive "b"', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, -109.0), -0);
        });

        it('Error: positive "a" and b = 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 55.0, 0), 'Error');
        });

        it('Error: positive "a" rounding "b" down to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 87.0, 0.4), 'Error');
        });

        it('Error: positive "a" and "b" rounded up to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 87.0, -0.4), 'Error');
        });

        it('Error: negative "a" and b = 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -1.0, 0), 'Error');
        });

        it('Error: negative "a" and "b" rounded down to zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -9.0, 0.4), 'Error');
        });

        it('Error: negative "a" and "b" rounded up to zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -15.0, -0.3), 'Error');
        });

        it('Error: a = b = 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
        });
    });
});