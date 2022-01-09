<template>
  <picture class="image">
    <img :alt="alt" v-img-lazy-load:src="src" />
  </picture>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'nr-image' })
export default class NrImage extends Vue {
  @Prop({ required: true }) src!: string;
  @Prop({ default: '' }) alt!: string;
}
</script>

<style lang="scss">
@import '@/assets/styles/basic/image';
</style>
