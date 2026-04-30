const request = require('supertest');
const app = require('./index');

describe('Weather API', () => {
  test('GET /health should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });

  test('GET /api/weather/invalid should return 404', async () => {
    const res = await request(app).get('/api/weather/vlleinexistante123456');
    expect(res.statusCode).toBe(404);
  });
});
