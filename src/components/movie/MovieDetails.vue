<template>
  <div class="movie-details">
    <ng-image
      class="movie-details__image"
      :src="movie.poster"
      :alt="movie.title"
    ></ng-image>
    <div class="movie-details__container">
      <h4 class="movie-details__title">{{ movie.title }}</h4>
      <p class="movie-details__rating">{{ movie.rating }}</p>
      <p class="movie-details__genre">{{ movie.genres.join(', ') }}</p>
      <p class="movie-details__date">
        {{ movie.releaseDate.getFullYear() }}
      </p>
      <p class="movie-details__duration">{{ movie.duration }}min</p>
      <p class="movie-details__description">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Image from '../basic/Image.vue';
import { IMovie } from '@/types';

@Component({
  name: 'nr-movie-details',
  components: { 'ng-image': Image },
})
export default class NrMovieDetails extends Vue {
  @Prop({ required: true }) movie!: IMovie;
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movie-details';
</style>
