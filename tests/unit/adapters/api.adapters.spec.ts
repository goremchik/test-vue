import chai, { expect } from 'chai';
import spies from 'chai-spies';
import Vue from 'vue';
import { ApiAdapter } from '@/adapters/api.adapters';
import VueResource from 'vue-resource';
chai.use(spies);
Vue.use(VueResource);

describe('ApiAdapter', () => {
  const body = {};
  const res = { body };
  const adapter = new ApiAdapter();
  const url = 'url';

  const spy = chai.spy.on(Vue.http, 'get', () => Promise.resolve(res));

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
