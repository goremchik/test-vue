<template>
  <nr-radio
    class="search-by"
    name="search-by"
    type="list"
    :items="[
      { value: 'all', text: 'All' },
      { value: 'documentary', text: 'Documentary' },
      { value: 'comedy', text: 'Comedy' },
      { value: 'horror', text: 'Horror' },
      { value: 'crime', text: 'Crime' },
    ]"
    :defaultValue="'all'"
  ></nr-radio>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrRadio from '../basic/Radio.vue';

@Component({
  name: 'nr-search-by',
  components: { NrRadio },
})
export default class NrSearchBy extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/other/search-by';
</style>
