<template>
  <div class="home">
    <section class="header">
      <div class="header__container">
        <nr-logo></nr-logo>
        <nr-add-movie></nr-add-movie>
      </div>
      <nr-search class="header__search"></nr-search>
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
import NrLogo from '@/components/structure/Logo.vue';
import NrSearch from '@/components/other/Search.vue';
import NrSearchBy from '@/components/other/SearchBy.vue';
import NrSortBy from '@/components/other/SortBy.vue';
import NrMoviesContainer from '@/components/movie/MoviesContainer.vue';
import NrAddMovie from '@/components/movie/AddMovie.vue';

@Component({
  components: {
    NrLogo,
    NrSearch,
    NrSortBy,
    NrSearchBy,
    NrMoviesContainer,
    NrAddMovie,
  },
})
export default class Home extends Vue {}
</script>
