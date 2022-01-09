<template>
  <label class="select">
    <select :name="name" class="select__field" @input="onSelect">
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :selected="item.value === value"
      >
        {{ item.text }}
      </option>
    </select>
    <span class="icon icon--arrow"></span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { ISelectable } from '@/types';

@Component({ name: 'nr-select' })
export default class NrSelect extends Vue {
  @Prop({ default: [] }) items!: ISelectable[];
  @Prop({ default: '' }) defaultValue!: string;
  @Prop({ required: true }) name!: string;
  value = '';

  mounted(): void {
    this.value = this.defaultValue;
  }

  @Emit('changed')
  onChange(data: string): void {
    this.value = data;
  }

  onSelect(e: InputEvent): void {
    const target: HTMLInputElement | null = e.target as HTMLInputElement;
    this.onChange(target?.value || '');
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/select';
</style>
