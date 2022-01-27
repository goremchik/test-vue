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
import {
  MoviesActions,
  MoviesActionKeys,
} from '@/store/modules/movies/actions';
import {
  MoviesMutationKeys,
  MoviesMutations,
} from '@/store/modules/movies/mutations';
import { moviesStoreKey as namespace } from '@/store/modules/movies/state';
import { MoviesGetterKeys } from '@/store/modules/movies/getters';

@Component({
  name: 'nr-sort-by',
  components: { NrSelect },
})
export default class NrSortBy extends Vue {
  @Getter(MoviesGetterKeys.sortBy, { namespace }) sortBy!: string;

  @Mutation(MoviesMutationKeys.setSortBy, { namespace })
  setSortBy!: MoviesMutations<MoviesMutationKeys.setSortBy>;

  @Action(MoviesActionKeys.loadMovies, { namespace })
  loadMovies!: MoviesActions<MoviesActionKeys.loadMovies>;

  get options(): ISelectable[] {
    return [
      { value: 'release_date', text: 'Release date' },
      { value: 'vote_average', text: 'Rating' },
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
