import mockRawData from '../../helper.js';

export const getWeather = jest.fn().mockImplementation(() => Promise.resolve((mockRawData)));