import VueRouter from 'vue-router';
import Vue from 'vue';
import '../../src/assets/styles/global/global.scss';
Vue.use(VueRouter);

export const decorators = [
  (story) => ({
    components: { story },
    router: new VueRouter({ routes: [] }),
    template: '<story />',
  }),
];
