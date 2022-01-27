import Vue from 'vue';
import VueResource from 'vue-resource';
import { IAdapter } from '@/types';

Vue.use(VueResource);

export class ApiAdapter implements IAdapter {
  constructor() {
    Vue.http.options.root = 'http://react-cdp-api.herokuapp.com';
  }

  async get<T>(url: string, config: Record<string, unknown> = {}): Promise<T> {
    const res = await Vue.http.get(url, config);
    return res.body;
  }
}

export const apiAdapter = new ApiAdapter();
