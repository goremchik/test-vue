<template>
  <router-link to="/" class="logo">
    <strong class="logo__first">netflix</strong>
    <span class="logo__second">roulette</span>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'nr-logo' })
export default class Logo extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/structure/logo';
</style>
