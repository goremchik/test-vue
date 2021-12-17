<template>
  <form class="search">
    <nr-input
      class="search__input"
      name="search"
      button="Search"
      label="Find your movie"
      placeholder="Search"
      @clicked="onSearch"
      @changed="onChange"
    ></nr-input>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrInput from '../basic/Input.vue';

@Component({
  name: 'nr-search',
  components: { NrInput },
})
export default class NrSearch extends Vue {
  onSearch(data: unknown): void {
    console.log('In search click', data);
  }

  onChange(data: unknown): void {
    console.log('In search cahnge', data);
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/other/search';
</style>
