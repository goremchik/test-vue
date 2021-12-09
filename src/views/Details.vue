<template>
  <div class="details">
    <section class="header header--simplified">
      <div class="header__container">
        <nr-logo class="logo--simplified"></nr-logo>
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
    <main class="main">
      <div class="main__navigation">
        <nr-search-by></nr-search-by>
        <nr-sort-by></nr-sort-by>
      </div>
      <nr-movies-container class="main__movies"></nr-movies-container>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMovie } from '@/types';
import movie from '@/mock/movie';
import NrLogo from '@/components/structure/Logo.vue';
import NrMovieDetails from '@/components/movie/MovieDetails.vue';
import NrSearchBy from '@/components/other/SearchBy.vue';
import NrSortBy from '@/components/other/SortBy.vue';
import NrMoviesContainer from '@/components/movie/MoviesContainer.vue';

@Component({
  components: {
    NrLogo,
    NrSortBy,
    NrSearchBy,
    NrMovieDetails,
    NrMoviesContainer,
  },
})
export default class Details extends Vue {
  movie: IMovie = movie;
}
</script>
