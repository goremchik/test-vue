<template>
  <ul :class="'radio radio--' + type">
    <li class="radio__item" v-for="item in items" :key="item.value">
      <label>
        <input
          type="radio"
          :value="item.value"
          class="radio__field"
          :name="name"
        />
        <p class="radio__label">{{ item.text }}</p>
      </label>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ISelectable } from '@/types';

@Component({ name: 'nr-radio' })
export default class NrRadio extends Vue {
  @Prop({ default: [] }) items!: ISelectable[];
  @Prop({ default: '' }) defaultValue!: string;
  @Prop({ default: 'button' }) type!: string;
  @Prop({ required: true }) name!: string;
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/radio';
</style>
