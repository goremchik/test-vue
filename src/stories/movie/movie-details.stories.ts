import NrMovieDetails from '@/components/movie/MovieDetails.vue';
import movies from '@mock/movies';

export default { title: 'MovieDetails' };

export const movieDetails = (): unknown => ({
  components: { NrMovieDetails },
  computed: {
    args: () => ({ movie: movies[0] }),
  },
  template: '<nr-movie-details v-bind="args"></nr-movie-details>',
});
