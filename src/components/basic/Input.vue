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
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
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
  value = '';

  @Emit('clicked')
  onButtonClick(): void {
    // Empty
  }

  @Emit('changed')
  onInputChange(): void {
    // Empty
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/input';
</style>
