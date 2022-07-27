import request from 'supertest'
import app from '../src/app.js'

describe('Simple test From Url', () => {

    test("check if app is running", async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})