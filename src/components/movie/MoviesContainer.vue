<template>
  <ul class="movies">
    <li class="movies__item" v-for="movie in movies" :key="movie.id">
      <nr-movie-card :movie="movie"></nr-movie-card>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMovie } from '@/types';
import movies from '@/mock/movies';
import MovieCard from './MovieCard.vue';

@Component({
  name: 'nr-movies-container',
  components: { 'nr-movie-card': MovieCard },
})
export default class NrSortBy extends Vue {
  movies: IMovie[] = movies;
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movies-container';
</style>
