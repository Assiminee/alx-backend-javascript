const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const url = 'http://localhost:7865';

  it('GET / returns correct response and status code', (done) => {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response and status code for a valid id', (done) => {
    request.get(`${url}/cart/13`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 13');
      done();
    });
  });

  it('GET /cart/:id returns correct status code for a invalid id (negative)', (done) => {
    request.get(`${url}/cart/-13`, (err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns correct status code for a invalid id (non-numeric)', (done) => {
    request.get(`${url}/cart/assiminee`, (err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
