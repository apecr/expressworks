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
  })
})
