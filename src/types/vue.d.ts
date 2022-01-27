import Vue, { VueConstructor } from 'vue';
import { Http } from 'vue-resource';

declare module 'vue/types/vue' {
  interface Vue {
    http: Http;
  }

  interface VueConstructor {
    http: Http;
  }
}
