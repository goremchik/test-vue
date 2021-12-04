<template>
  <form class="search">
    <nr-input
      class="search__input"
      name="search"
      button="Search"
      label="Find your movie"
      placeholder="Search"
      @clicked="onSearch"
    ></nr-input>
    <p class="search__search-by-label">Search by</p>
    <nr-radio
      class="search__radio"
      name="search-by"
      :items="[
        { value: 'title', text: 'Title' },
        { value: 'genre', text: 'Genre' },
      ]"
    ></nr-radio>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '../basic/Input.vue';
import Radio from '../basic/Radio.vue';

@Component({
  name: 'nr-search',
  components: {
    'nr-input': Input,
    'nr-radio': Radio,
  },
})
export default class NrSearch extends Vue {
  onSearch(data: any): void {
    console.log(data);
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/other/search';
</style>
