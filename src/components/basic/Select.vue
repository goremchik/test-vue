<template>
  <label class="select">
    <select :name="name" class="select__field">
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :selected="item.value === selected"
      >
        {{ item.text }}
      </option>
    </select>
    <span class="icon icon--arrow"></span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRadio } from '@/types';

@Component({ name: 'nr-select' })
export default class NrSelect extends Vue {
  @Prop({ default: [] }) items!: IRadio[];
  @Prop({ default: '' }) selected!: string;
  @Prop({ required: true }) name!: string;
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/select';
</style>
