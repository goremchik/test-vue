<template>
  <div class="movies">
    <nr-movie-context :showContextMenu="showContextMenu" ref="menu">
    </nr-movie-context>
    <p class="movies__info">
      <span class="movies__highlight">{{ movies.length }}</span>
      movies found
    </p>
    <ul class="movies__list">
      <li class="movies__item" v-for="movie in movies" :key="movie.id">
        <nr-movie-card
          :movie="movie"
          @moviecontext="openContextMenu($event, movie)"
        ></nr-movie-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMovie } from '@/types';
import { Action, Getter } from 'vuex-class';
import NrMovieCard from './MovieCard.vue';
import NrMovieContext from './MovieContext.vue';
import { MoviesActions } from '@/store/modules/movies/actions';

@Component({
  name: 'nr-movies-container',
  components: { NrMovieCard, NrMovieContext },
})
export default class NrSortBy extends Vue {
  showContextMenu = false;

  @Getter('movies', { namespace: 'movies' }) movies!: IMovie[];
  @Action('loadMovies', { namespace: 'movies' })
  loadMovies!: MoviesActions<'loadMovies'>;

  mounted(): void {
    this.loadMovies();
  }

  openContextMenu(e: MouseEvent, movie: IMovie): void {
    (this.$refs.menu as NrMovieContext).open(e, movie);
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movies-container';
</style>
