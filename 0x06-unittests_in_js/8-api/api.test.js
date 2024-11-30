const request = require('request');
const { expect } = require('chai');

describe('Index page test suite', () => {
  it('GET / returns correct response and status code', (done) => {
    request.get(`http://localhost:7865/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
