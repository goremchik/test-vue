import NrMovieCard from '@/components/movie/MovieCard.vue';
import movies from '@/mock/movies';

export default { title: 'MovieCard' };

export const movieCard = (): unknown => ({
  components: { NrMovieCard },
  computed: {
    args: () => ({ movie: movies[0] }),
  },
  template: `
    <nr-movie-card
      v-bind="args"
      style="width: 300px"
    ></nr-movie-card>
  `,
});
