<template>
  <button :type="type" class="button" @click="onButtonClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({ name: 'nr-button' })
export default class NrButton extends Vue {
  @Prop({ default: 'button' }) type!: string;

  @Emit('clicked')
  onButtonClick(): void {
    /* Empty */
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/button';
</style>
