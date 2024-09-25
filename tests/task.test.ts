import request from 'supertest';
import app from '../src/app';

describe('Task API', () => {
  it('should get tasks', async () => {
    const res = await request(app).get('/api/v1/tasks');
    expect(res.status).toBe(200);
  });
});
