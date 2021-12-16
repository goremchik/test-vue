import NrFooter from '@/components/structure/Footer.vue';

export default { title: 'Footer' };

export const footer = (): unknown => ({
  components: { NrFooter },
  template: `
    <div style="position: relative; height: 400px">
      <nr-footer></nr-footer>
    </div>
  `,
});
