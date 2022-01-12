<template>
  <nr-radio
    class="search-by"
    name="search-by"
    type="list"
    :defaultValue="searchBy || ''"
    :items="options"
    @changed="onChange"
  ></nr-radio>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrRadio from '../basic/Radio.vue';
import { Getter, Mutation, Action } from 'vuex-class';
import {
  MoviesActions,
  MoviesActionKeys,
} from '@/store/modules/movies/actions';
import { ISelectable } from '@/types';
import {
  MoviesMutationKeys,
  MoviesMutations,
} from '@/store/modules/movies/mutations';
import { moviesStoreKey as namespace } from '@/store/modules/movies/state';
import { MoviesGetterKeys } from '@/store/modules/movies/getters';

@Component({
  name: 'nr-search-by',
  components: { NrRadio },
})
export default class NrSearchBy extends Vue {
  @Getter(MoviesGetterKeys.searchBy, { namespace }) searchBy!: string;
  @Getter(MoviesGetterKeys.genres, { namespace }) genres!: string[];

  @Mutation(MoviesMutationKeys.setSearchBy, { namespace })
  setSearchBy!: MoviesMutations<MoviesMutationKeys.setSearchBy>;

  @Action(MoviesActionKeys.loadMovies, { namespace })
  loadMovies!: MoviesActions<MoviesActionKeys.loadMovies>;

  @Action(MoviesActionKeys.loadGenres, { namespace })
  loadGenres!: MoviesActions<MoviesActionKeys.loadGenres>;

  get options(): ISelectable[] {
    return [
      { value: '', text: 'All' },
      ...this.genres.map((genre) => ({ value: genre, text: genre })),
    ];
  }

  onChange(searchBy: string): void {
    this.setSearchBy(searchBy);
    this.loadMovies();
  }

  mounted(): void {
    this.loadGenres();
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/other/search-by';
</style>
