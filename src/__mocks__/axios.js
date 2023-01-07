export default {
  get: jest.fn().mockResolvedValue({
    data: {
      alpha2: 'IR',
      alpha3: 'IRN',
      country: 'Iran',
      data: {
        latitude: 32,
        longitude: 53,
        generationtime_ms: 0.5029439926147461,
        utc_offset_seconds: -21600,
        timezone: 'America/Chicago',
      },
      latitude: 32,
      longitude: 53,
      numeric: 364,
    },
  }),
  create: jest.fn().mockResolvedValue({ baseURL: 'https://api.open-meteo.com/v1/', headers: { 'Content-type': 'application/json' } }),
};
