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
import { MoviesActions } from '@/store/modules/movies/actions';
import { ISelectable } from '@/types';

@Component({
  name: 'nr-search-by',
  components: { NrRadio },
})
export default class NrSearchBy extends Vue {
  @Getter('searchBy', { namespace: 'movies' }) searchBy!: string;
  @Getter('genres', { namespace: 'movies' }) genres!: string[];
  @Mutation('setSearchBy', { namespace: 'movies' }) setSearchBy: any;
  @Action('loadMovies', { namespace: 'movies' })
  loadMovies!: MoviesActions<'loadMovies'>;
  @Action('loadGenres', { namespace: 'movies' })
  loadGenres!: MoviesActions<'loadGenres'>;

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
