<template>
  <ul :class="'radio radio--' + type">
    <li class="radio__item" v-for="item in items" :key="item.value">
      <label>
        <input
          type="radio"
          :value="item.value"
          class="radio__field"
          :name="name"
          :checked="value === item.value"
          @input="onInputChange(item.value)"
        />
        <p class="radio__label">{{ item.text }}</p>
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { ISelectable } from '@/types';

@Component({ name: 'nr-radio' })
export default class NrRadio extends Vue {
  @Prop({ default: [] }) items!: ISelectable[];
  @Prop({ default: '' }) defaultValue!: string;
  @Prop({ default: 'button' }) type!: string;
  @Prop({ required: true }) name!: string;
  value = '';

  mounted(): void {
    this.value = this.defaultValue;
  }

  @Emit('changed')
  onInputChange(data: string): void {
    this.value = data;
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/radio';
</style>
