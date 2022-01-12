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
          v-if="movie"
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import { IMovie } from '@/types';
import NrLogo from '@/components/structure/Logo.vue';
import NrMovieDetails from '@/components/movie/MovieDetails.vue';
import NrSearchBy from '@/components/other/SearchBy.vue';
import NrSortBy from '@/components/other/SortBy.vue';
import NrMoviesContainer from '@/components/movie/MoviesContainer.vue';
import { Mutation, Getter } from 'vuex-class';
import { Route } from 'vue-router';
import { moviesStoreKey as namespace } from '@/store/modules/movies/state';
import { MoviesGetterKeys } from '@/store/modules/movies/getters';
import {
  MoviesMutationKeys,
  MoviesMutations,
} from '@/store/modules/movies/mutations';

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
  @Getter(MoviesGetterKeys.selectedMovie, { namespace }) movie!: IMovie;
  @Mutation(MoviesMutationKeys.selectMovie, { namespace })
  selectMovie!: MoviesMutations<MoviesMutationKeys.selectMovie>;

  @Watch('$route')
  onUrlChange({ params }: Route): void {
    this.selectMovie(params.id);
  }

  mounted(): void {
    this.onUrlChange(this.$route);
  }
}
</script>
