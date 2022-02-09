import mockCompainesResponseData from 'api/mockData/compaines';
import mockProductResponseData from 'api/mockData/product';
import { API, getCompaines, getData } from 'api/product';

import MockAdapter from 'axios-mock-adapter';

jest.unmock('api/product.ts');

const mock = new MockAdapter(API);

describe('product tests', () => {
  it('requests and gets a success response from getData api', async () => {
    const url = 'items';
    mock.onGet(url).reply(200, mockProductResponseData);
    const result = await getData();
    expect(result).toEqual(mockProductResponseData);
  });
  it('requests and gets a success response from getCompaines api', async () => {
    const url = 'compaines';
    mock.onGet(url).reply(200, mockCompainesResponseData);
    const result = await getCompaines();
    expect(result).toEqual(mockCompainesResponseData);
  });
});
