import NrButton from '@/components/basic/Button.vue';

export default { title: 'Button' };

export const button = (): unknown => ({
  components: { NrButton },
  template: '<nr-button>Default Button</nr-button>',
});

export const buttonStyles = (): unknown => ({
  components: { NrButton },
  template: `
    <nr-button style="background: #f65261; color: #fff">
      Styled Button
    </nr-button>
  `,
});
