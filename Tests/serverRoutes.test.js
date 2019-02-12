const router = require('../Server/server')
const request = require('supertest')
const cheerio = require('cheerio')

test('Test testing environment', () => {
  expect(true).toBeTruthy()
})

test('index route loads correctly', done => {
  request(router)
    .get('/')
    .expect(202)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect('Content-Length', '1185')
    .end((err, res) => {
      if (err) console.error(err)
     // else console.log(res)
      done()
    })
})

test('/ returns correct body content', done => {
  request(router)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      //cheerio loaded the body of text
      const $ = cheerio.load(res.text)
      //const actual = $('div').length
      const actual =$('.landingImg').length

     // console.log(cheerio.load(res.text))
      expect(actual).toBe(1)
      done()
    })
})
