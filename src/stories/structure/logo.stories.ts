import NrLogo from '@/components/structure/Logo.vue';

export default { title: 'Logo' };

export const logo = (): unknown => ({
  components: { NrLogo },
  template: '<nr-logo></nr-logo>',
});
