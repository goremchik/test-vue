import NrMovieCard from '@/components/movie/MovieCard.vue';
import movie from '@/mock/movie';

export default { title: 'MovieCard' };

export const movieCard = (args: any): unknown => ({
  components: { NrMovieCard },
  computed: {
    args: () => ({ movie }),
  },
  template: `
    <nr-movie-card
      v-bind="args"
      style="width: 300px"
    ></nr-movie-card>
  `,
});
