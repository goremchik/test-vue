<template>
  <section class="footer">
    <nr-logo></nr-logo>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrLogo from './Logo.vue';

@Component({
  name: 'nr-footer',
  components: { NrLogo },
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/structure/footer';
</style>
