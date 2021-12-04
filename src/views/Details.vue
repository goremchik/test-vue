<template>
  <div class="details">
    <section class="header">
      <div class="header__container">
        <nr-logo></nr-logo>
        <router-link
          to="/"
          class="header__icon icon icon--search"
        ></router-link>
        <nr-movie-details
          :movie="movie"
          class="header__details"
        ></nr-movie-details>
      </div>
    </section>
    <section class="info">
      <div class="info__genre">
        Films by {{ movie.genres.join(', ') }} genre
      </div>
    </section>
    <main class="main">
      <nr-movies-container class="main__container"></nr-movies-container>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMovie } from '@/types';
import movie from '@/mock/movie';
import Logo from '@/components/structure/Logo.vue';
import MoviesDetails from '@/components/movie/MovieDetails.vue';
import MoviesContainer from '@/components/movie/MoviesContainer.vue';

@Component({
  components: {
    'nr-logo': Logo,
    'nr-movie-details': MoviesDetails,
    'nr-movies-container': MoviesContainer,
  },
})
export default class Details extends Vue {
  movie: IMovie = movie;
}
</script>
