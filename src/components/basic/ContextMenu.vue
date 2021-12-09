<template>
  <div
    class="context-menu"
    v-show="show"
    :style="style"
    ref="context"
    tabindex="0"
    @blur="close"
  >
    <span class="icon icon--cross" @click="close"></span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'nr-context-menu' })
export default class NrContextMenu extends Vue {
  @Prop({ default: false }) display!: boolean;

  left = 0;
  top = 0;
  show = false;

  get style(): any {
    return {
      top: this.top + 'px',
      left: this.left + 'px',
    };
  }

  close(): void {
    this.show = false;
    this.left = 0;
    this.top = 0;
  }

  open(evt: MouseEvent): void {
    this.left = evt.pageX || evt.clientX;
    this.top = evt.pageY || evt.clientY;

    Vue.nextTick(() => (this.$el as HTMLButtonElement).focus());
    this.show = true;
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/context-menu';
</style>
