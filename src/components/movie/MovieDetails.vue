<template>
  <div class="movie-details">
    <nr-image
      class="movie-details__image"
      :src="movie.poster"
      :alt="movie.title"
    ></nr-image>
    <div class="movie-details__container">
      <h4 class="movie-details__title">{{ movie.title }}</h4>
      <p class="movie-details__rating">{{ movie.rating }}</p>
      <p class="movie-details__genre">{{ movie.genres.join(', ') }}</p>
      <p class="movie-details__date">
        {{ movie.releaseDate.getFullYear() }}
      </p>
      <p class="movie-details__duration">{{ duration(movie.duration) }}</p>
      <p class="movie-details__description">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NrImage from '../basic/Image.vue';
import { IMovie } from '@/types';
import { duration } from '@/utils/time';

@Component({
  name: 'nr-movie-details',
  components: { NrImage },
})
export default class NrMovieDetails extends Vue {
  @Prop({ required: true }) movie!: IMovie;
  duration = duration;
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movie-details';
</style>
