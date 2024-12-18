const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('Sum of two positive floating point whole numbers', () => {
      expect(calculateNumber('SUM', 13.0, 7.0)).to.equal( 20);
    });

    it('Positive Sum: Round up "a", round down "b"', () => {
      expect(calculateNumber('SUM', 13.6, 7.3)).to.equal( 21);
    });

    it('Positive Sum: Round down "a", round up "b"', () => {
      expect(calculateNumber('SUM', 13.3, 7.6)).to.equal( 21);
    });

    it('Positive Sum: Round up "a"', () => {
      expect(calculateNumber('SUM', 13.6, 7.0)).to.equal( 21);
    });

    it('Positive Sum: Round down "a"', () => {
      expect(calculateNumber('SUM', 13.3, 7.0)).to.equal( 20);
    });

    it('Negative Sum: equal numbers', () => {
      expect(calculateNumber('SUM', -7.0, -7.0)).to.equal( -14);
    });

    it('Negative Sum: different values', () => {
      expect(calculateNumber('SUM', -98.3, -1.8)).to.equal( -100);
    });

    it('Positive Sum: negative "a" positive "b"', () => {
      expect(calculateNumber('SUM', -13.0, 15.0)).to.equal( 2);
    });

    it('Negative Sum: negative "a" positive "b"', () => {
      expect(calculateNumber('SUM', -13.0, 2.0)).to.equal( -11);
    });

    it('Equals zero: negative "a" positive "b"', () => {
      expect(calculateNumber('SUM', -13.0, 13.0)).to.equal( 0);
    });

    it('Equals zero: negative "b" positive "a"', () => {
      expect(calculateNumber('SUM', 13.0, -13.0)).to.equal( 0);
    });

    it('Sum of zeros', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {

    it('Sub of two positive floating point whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 10.0, 7.0)).to.equal(3);
    });

    it('Positive Sub: Round up "a", round down "b"', () => {
      expect(calculateNumber('SUBTRACT', 13.6, 4.3)).to.equal(10);
    });

    it('Positive Sub: Round down "a", round up "b"', () => {
      expect(calculateNumber('SUBTRACT', 13.3, 2.6)).to.equal(10);
    });

    it('Positive Sub: Round up "a"', () => {
      expect(calculateNumber('SUBTRACT', 13.6, 4.0)).to.equal(10);
    });

    it('Positive Sub: Round down "a"', () => {
      expect(calculateNumber('SUBTRACT', 13.3, 10.0)).to.equal(3);
    });

    it('Negative Sub: different values', () => {
      expect(calculateNumber('SUBTRACT', -98.3, -1.8)).to.equal(-96);
    });

    it('Negative Sub: negative "a" positive "b"', () => {
      expect(calculateNumber('SUBTRACT', -13.0, 15.0)).to.equal(-28);
    });

    it('Sub of zeros', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });

    it('Equals zero: same value for both numbers', () => {
      expect(calculateNumber('SUBTRACT', 17.0, 17.0)).to.equal(0);
    });

    it('Equals zero: same value for both numbers', () => {
      expect(calculateNumber('SUBTRACT', -17.0, -17.0)).to.equal(0);
    });

    it('Negative sub: negative "a" positive "b"', () => {
      expect(calculateNumber('SUBTRACT', -17.0, 17.0)).to.equal(-34);
    });

    it('Positive sub: positive "a" negative "b"', () => {
      expect(calculateNumber('SUBTRACT', 17.0, -17.0)).to.equal(34);
    });

    it('Negative result: negative "a" positive "b"', () => {
      expect(calculateNumber('SUBTRACT', -17.0, 1.0)).to.equal(-18);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('Positive result: positive "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', 24.0, 2.0)).to.equal(12.0);
    });

    it('Negative result: negative "a" positive "b"', () => {
      expect(calculateNumber('DIVIDE', -13.0, 2.0)).to.equal(-6.5);
    });

    it('Negative result: positive "a" negative "b"', () => {
      expect(calculateNumber('DIVIDE', 13.0, -2.0)).to.equal(-6.5);
    });

    it('Positive result: negative "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', -13.0, -2.0)).to.equal(6.5);
    });

    it('Positive result: positive "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', 13.0, 2.0)).to.equal(6.5);
    });

    it('Positive result: equal "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', 122.0, 122.0)).to.equal(1);
    });

    it('Negative result: equal "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', -122.0, -122.0)).to.equal(1);
    });

    it('Positive result: equal rounded up "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', 33.6, 34.0)).to.equal(1);
    });

    it('Positive result: equal rounded down "a" and "b"', () => {
      expect(calculateNumber('DIVIDE', 34.4, 34.0)).to.equal(1);
    });

    it('Equals zero: a = 0 and positive "b"', () => {
      expect(calculateNumber('DIVIDE', 0.0, 109.0)).to.equal(0);
    });

    it('Equals negative zero: a = 0 and positive "b"', () => {
      expect(calculateNumber('DIVIDE', 0.0, -109.0)).to.equal(-0);
    });

    it('Error: positive "a" and b = 0', () => {
      expect(calculateNumber('DIVIDE', 55.0, 0)).to.equal('Error');
    });

    it('Error: positive "a" rounding "b" down to 0', () => {
      expect(calculateNumber('DIVIDE', 87.0, 0.4)).to.equal('Error');
    });

    it('Error: positive "a" and "b" rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 87.0, -0.4)).to.equal('Error');
    });

    it('Error: negative "a" and b = 0', () => {
      expect(calculateNumber('DIVIDE', -1.0, 0)).to.equal('Error');
    });

    it('Error: negative "a" and "b" rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -9.0, 0.4)).to.equal('Error');
    });

    it('Error: negative "a" and "b" rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -15.0, -0.3)).to.equal('Error');
    });

    it('Error: a = b = 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});