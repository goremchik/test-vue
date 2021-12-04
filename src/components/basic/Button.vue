<template>
  <button :type="type" class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'nr-button' })
export default class NrButton extends Vue {
  @Prop({ default: 'button' }) type!: string;
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/button';
</style>
