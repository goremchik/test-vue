<template>
  <div class="sort-by">
    <p class="sort-by__text">Sort by</p>
    <nr-select
      class="sort-by__selct"
      name="sort-by"
      :defaultValue="sortBy || ''"
      :items="options"
      @changed="onChange"
    ></nr-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrSelect from '../basic/Select.vue';
import { ISelectable } from '@/types';
import { Getter, Action, Mutation } from 'vuex-class';
import { MoviesActions } from '@/store/modules/movies/actions';

@Component({
  name: 'nr-sort-by',
  components: { NrSelect },
})
export default class NrSortBy extends Vue {
  @Getter('sortBy', { namespace: 'movies' }) sortBy!: string;
  @Mutation('setSortBy', { namespace: 'movies' })
  setSortBy!: any;
  @Action('loadMovies', { namespace: 'movies' })
  loadMovies!: MoviesActions<'loadMovies'>;

  get options(): ISelectable[] {
    return [
      { value: 'release', text: 'Release date' },
      { value: 'rating', text: 'Rating' },
    ];
  }

  onChange(sortBy: string): void {
    this.setSortBy(sortBy);
    this.loadMovies();
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/other/sort-by';
</style>
