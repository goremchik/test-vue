<template>
  <nr-context-menu :display="showContextMenu" ref="menu">
    <ul>
      <li>Edit</li>
      <li>Delete</li>
    </ul>
  </nr-context-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NrContextMenu from '../basic/ContextMenu.vue';
import { IMovie } from '../../types';

@Component({
  name: 'nr-movie-context',
  components: { NrContextMenu },
})
export default class NrMovieContext extends Vue {
  @Prop({ default: false }) showContextMenu!: boolean;
  movie!: IMovie;
  open(e: MouseEvent, movie: IMovie): void {
    this.movie = movie;
    (this.$refs.menu as NrContextMenu).open(e);
  }
}
</script>
