<template>
  <div class="movie-card">
    <div @contextmenu="onContextMenu">
      <router-link :to="'/details/' + movie.id" class="movie-card__link">
        <nr-image
          class="movie-card__image"
          :src="movie.poster"
          :alt="movie.title"
        ></nr-image>
      </router-link>
    </div>
    <h4 class="movie-card__title">{{ movie.title }}</h4>
    <p class="movie-card__date">{{ movie.releaseDate.getFullYear() }}</p>
    <p class="movie-card__genre">{{ movie.genres.join(', ') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import NrImage from '../basic/Image.vue';
import { IMovie } from '@/types';

@Component({
  name: 'nr-movie-card',
  components: { NrImage },
})
export default class NrMovieCard extends Vue {
  @Prop() movie!: IMovie;

  @Emit('moviecontext')
  onContextMenu(): void {
    // Empty
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/movie/movie-card';
</style>
