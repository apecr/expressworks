const request = require('supertest')
const app = require('./../app')

describe('Application', () => {
  describe('Endpoints', () => {
    describe('home GET', () => {
      it('Get the /home GET endpoint and get (Hello World!) text in the response', async() => {
        const response = await request(app)
          .get('/home')
        expect(response.statusCode).toEqual(200)
        expect(response.text).toEqual('Hello World!')
      })
    })
    describe('index.html GET', () => {
      it('Should return index.html file', async() => {
        const response = await request(app).get('/index.html')
        expect(response.statusCode).toEqual(200)
        expect(response.text).toContain('<html>')
        expect(response.text).toContain('<title>expressworks</title>')
        expect(response.headers['content-type']).toContain('text/html')
      })
    })
  })
})
