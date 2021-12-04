<template>
  <label class="input">
    <p v-if="label" class="input__label">{{ label }}</p>
    <input
      class="input__field"
      v-model="value"
      :placeholder="placeholder"
      :name="name"
    />
    <ng-button
      type="button"
      class="input__button"
      v-if="button"
      v-on:click="onButtonClick"
    >
      {{ button }}
    </ng-button>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from './Button.vue';

@Component({
  name: 'nr-input',
  components: { 'ng-button': Button },
})
export default class NrInput extends Vue {
  @Prop({ default: '' }) button!: string;
  @Prop({ default: '' }) label!: string;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ required: true }) name!: string;
  value = '';

  onButtonClick(): void {
    this.$emit('clicked', this.value);
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/input';
</style>
