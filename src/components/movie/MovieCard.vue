<template>
  <div class="movie-card">
    <router-link :to="'/details/' + movie.id" class="movie-card__link">
      <ng-image
        class="movie-card__image"
        :src="movie.poster"
        :alt="movie.title"
      ></ng-image>
    </router-link>
    <h4 class="movie-card__title">{{ movie.title }}</h4>
    <p class="movie-card__date">{{ movie.releaseDate.getFullYear() }}</p>
    <p class="movie-card__genre">{{ movie.genres.join(', ') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Image from '../basic/Image.vue';
import { IMovie } from '@/types';

@Component({
  name: 'nr-movie-card',
  components: { 'ng-image': Image },
})
export default class NrMovieCard extends Vue {
  @Prop() movie!: IMovie;
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movie-card';
</style>
