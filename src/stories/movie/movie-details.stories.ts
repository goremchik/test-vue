import NrMovieDetails from '@/components/movie/MovieDetails.vue';
import movie from '@/mock/movie';

export default { title: 'MovieDetails' };

export const movieDetails = (): unknown => ({
  components: { NrMovieDetails },
  computed: {
    args: () => ({ movie }),
  },
  template: '<nr-movie-details v-bind="args"></nr-movie-details>',
});
