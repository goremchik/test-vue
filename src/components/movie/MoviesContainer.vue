<template>
  <div class="movies">
    <nr-context-menu :display="showContextMenu" ref="menu">
      <ul>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
    </nr-context-menu>
    <p class="movies__info">
      <span class="movies__highlight">{{ movies.length }}</span>
      movies found
    </p>
    <ul class="movies__list">
      <li
        class="movies__item"
        v-for="movie in movies"
        :key="movie.id"
        @contextmenu="openContextMenu"
      >
        <nr-movie-card :movie="movie"></nr-movie-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMovie } from '@/types';
import movies from '@/mock/movies';
import NrMovieCard from './MovieCard.vue';
import NrContextMenu from '../basic/ContextMenu.vue';

@Component({
  name: 'nr-movies-container',
  components: { NrMovieCard, NrContextMenu },
})
export default class NrSortBy extends Vue {
  movies: IMovie[] = movies;
  showContextMenu = false;

  openContextMenu(e: MouseEvent): void {
    e.preventDefault();
    (this.$refs.menu as any).open(e);
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movies-container';
</style>
