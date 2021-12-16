import NrSortBy from '@/components/other/SortBy.vue';

export default { title: 'SortBy' };

export const sortBy = (): unknown => ({
  components: { NrSortBy },
  template: '<nr-sort-by></nr-sort-by>',
});
