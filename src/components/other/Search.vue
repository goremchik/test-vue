<template>
  <form class="search" @submit="onSubmit">
    <nr-input
      class="search__input"
      name="search"
      button="Search"
      label="Find your movie"
      placeholder="Search"
      :defaultValue="search"
      @clicked="onSearch"
      @changed="onChange"
    ></nr-input>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrInput from '../basic/Input.vue';
import { Action, Mutation, Getter } from 'vuex-class';
import {
  MoviesActions,
  MoviesActionKeys,
} from '@/store/modules/movies/actions';
import { debounce } from '@/utils/timeout';
import {
  MoviesMutationKeys,
  MoviesMutations,
} from '@/store/modules/movies/mutations';
import { moviesStoreKey as namespace } from '@/store/modules/movies/state';
import { MoviesGetterKeys } from '@/store/modules/movies/getters';

@Component({
  name: 'nr-search',
  components: { NrInput },
})
export default class NrSearch extends Vue {
  @Getter(MoviesGetterKeys.search, { namespace }) search!: string;
  @Action(MoviesActionKeys.loadMovies, { namespace })
  loadMovies!: MoviesActions<MoviesActionKeys.loadMovies>;
  @Mutation(MoviesMutationKeys.setSearch, { namespace })
  setSearch!: MoviesMutations<MoviesMutationKeys.setSearch>;

  onSubmit(e: Event): void {
    e.preventDefault();
    this.onSearch();
  }

  onSearch(): void {
    this.loadMovies();
  }

  onChange = debounce(this.setSearch, 200);
}
</script>

<style lang="scss">
@import '@/assets/styles/other/search';
</style>
