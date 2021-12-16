<template>
  <nr-button class="add-movie">+ Add Movie</nr-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NrButton from '../basic/Button.vue';

@Component({
  name: 'nr-add-movie',
  components: { NrButton },
})
export default class NrAddMovie extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/movie/add-movie';
</style>
