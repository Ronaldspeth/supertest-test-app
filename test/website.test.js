const request = require('supertest');
//const webSite = require('https://jsonplaceholder.typicode.com/posts/1/comments'); //reference to you app.js file
const webSite = "https://jsonplaceholder.typicode.com"

jest.setTimeout(30000);

describe('GET / should be funtioning with HTML return', function () {
    it('respond with json containing a list of all users', function (done) {
        request("https://jsonplaceholder.typicode.com/posts/1/comments")
            .get('/')
            //.set('Accept', 'application/json')
            //.expect('Content-Type', "text/html; charset=UTF-8")
            .expect(200, done);
    });
});

describe('GET /posts/1/comments should be funtioning with JSON return', function () {
    it('respond with json containing a list of comments', function (done) {
        request(webSite)
            .get('/posts/1/comments')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect('Content-Length', '15')
            .expect(200, done);
    });
});

describe('POST /users', function() {
    it('responds with json', function(done) {
      request(webSite)
        .post('/posts/1/comments')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

describe('GET /albums/1/photos should be funtioning with JSON return', function () {
    it('respond with json containing a list of albums with photos', function (done) {
        request(webSite)
            .get('/albums/1/photos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect('Content-Length', '15')
            .expect(200, done);
    });
});

describe('POST /users', function() {
    it('responds with json', function(done) {
      request(webSite)
        .post('/albums/1/photos')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

describe('GET /albums/1/photos should be funtioning with JSON return', function () {
    it('respond with json containing a list of albums with photos', function (done) {
        request(webSite)
            .get('/users/1/albums')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect('Content-Length', '15')
            .expect(200, done);
    });
});

describe('POST /users', function() {
    it('responds with json', function(done) {
      request(webSite)
        .post('/users/1/albums')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

describe('GET /albums/1/photos should be funtioning with JSON return', function () {
    it('respond with json containing a list of albums with photos', function (done) {
        request(webSite)
            .get('/users/1/todos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect('Content-Length', '15')
            .expect(200, done);
    });
});

describe('GET /albums/1/photos should be funtioning with JSON return', function () {
    it('respond with json containing a list of albums with photos', function (done) {
        request(webSite)
            .get('/users/1/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect('Content-Length', '15')
            .expect(200, done);
    });
});

