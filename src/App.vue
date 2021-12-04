<template>
  <div class="page">
    <router-view />
    <nr-footer></nr-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from './components/structure/Footer.vue';

@Component({
  components: {
    'nr-footer': Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/styles/global/global';
@import './assets/styles/global/page';
</style>
