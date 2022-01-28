<template>
  <label class="input">
    <p v-if="label" class="input__label">{{ label }}</p>
    <input
      class="input__field"
      v-model="value"
      :placeholder="placeholder"
      :name="name"
      @input="onInputChange(value)"
    />
    <nr-button
      type="button"
      class="input__button"
      v-if="button"
      @clicked="onButtonClick(value)"
    >
      {{ button }}
    </nr-button>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import NrButton from './Button.vue';

@Component({
  name: 'nr-input',
  components: { NrButton },
})
export default class NrInput extends Vue {
  @Prop({ default: '' }) button!: string;
  @Prop({ default: '' }) label!: string;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ required: true }) name!: string;
  @Prop({ default: '' }) defaultValue!: string;
  value = '';

  mounted(): void {
    this.value = this.defaultValue;
  }

  @Emit('clicked')
  onButtonClick(): void {
    // Empty
  }

  @Emit('changed')
  onInputChange(): void {
    // Empty
  }

  @Watch('defaultValue')
  onValueChanged(val: string): void {
    this.value = val;
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/input';
</style>
