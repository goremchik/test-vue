<template>
  <div class="sort-by">
    <p class="sort-by__text">Sort by</p>
    <nr-select
      class="sort-by__selct"
      name="sort-by"
      :items="[
        { value: 'release', text: 'Release date' },
        { value: 'rating', text: 'Rating' },
      ]"
    ></nr-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrSelect from '../basic/Select.vue';

@Component({
  name: 'nr-sort-by',
  components: { NrSelect },
})
export default class NrSortBy extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/other/sort-by';
</style>
