import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { ApiAdapter } from '@/adapters/api.adapters';
chai.use(spies);

describe('ApiAdapter', () => {
  const body = {};
  const res = { body };
  const stubHttpClient = { get: () => Promise.resolve(res), options: {} };
  const adapter = new ApiAdapter(stubHttpClient as any);
  const url = 'url';

  const spy = chai.spy.on(stubHttpClient, 'get');

  it('should make HTTP GET request', async () => {
    const data = await adapter.get(url);
    expect(spy).to.have.been.called.with(url, {});
    expect(data).to.eql(body);
  });

  it('should make HTTP GET request with config', async () => {
    const config = { test: 'test' };
    const data = await adapter.get(url, config);

    expect(data).to.eql(body);
    expect(spy).to.have.been.called.with(url, config);
  });
});
