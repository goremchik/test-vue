import NrSearch from '@/components/other/Search.vue';

export default { title: 'Search' };

export const search = (): unknown => ({
  components: { NrSearch },
  template: `
    <nr-search
      style="padding: 10px; background: #444"
    ></nr-search>
  `,
});
