<template>
  <div class="sort-by">
    <p class="sort-by__text">Sort by</p>
    <nr-radio
      class="sort-by__radio"
      name="sort-by"
      :items="[
        { value: 'release', text: 'Release date' },
        { value: 'rating', text: 'Rating' },
      ]"
    ></nr-radio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Radio from '../basic/Radio.vue';

@Component({
  name: 'nr-sort-by',
  components: { 'nr-radio': Radio },
})
export default class SortBy extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/other/sort-by';
</style>
