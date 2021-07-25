import axios from 'axios';
import launchServer, { server } from '../src/server';

describe('Log Router', () => {
  beforeAll(async () => {
    await launchServer();
  });

  afterAll(async () => {
    server.close();
  });

  it('simple http request with logs with 100ms timeout', async () => {
    const response = await axios.post(
      'http://127.0.0.1:3000',
      {
        log: `[
        'id=3d9101b8-094a-405a-b0eb-f19f9244ffc9',
        'service_name=web',
        'process=web.2807.828796091802',
        'sample#load_avg_1m=0.24',
        'sample#load_avg_5m=0.62',
        'sample#load_avg_15m=0.15'
      ]`,
      },
      { timeout: 100 },
    );
    expect(response.status).toBe(204);
  });
});
