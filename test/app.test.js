
const request = require('supertest');
const app = require('../app'); //reference to you app.js file

describe('GET / should be funtioning with HTML return', function () {
    it('respond with the home page', function (done) {
        request(app)
            .get('/')
            //.set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=UTF-8")
            .expect(200, done);
    });
});