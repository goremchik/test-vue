import NrInput from '@/components/basic/Input.vue';

export default { title: 'Input' };

export const input = (): unknown => ({
  components: { NrInput },
  template: `
    <nr-input
      style="background: grey; padding: 10px"
      name="test"
    ></nr-input>
  `,
});

export const inputWithButton = (): unknown => ({
  components: { NrInput },
  template: `
    <nr-input
      style="background: grey; padding: 10px"
      name="test"
      button="Button"
    ></nr-input>
  `,
});

export const inputWithLabel = (): unknown => ({
  components: { NrInput },
  template: `
    <nr-input
      style="background: grey; padding: 10px"
      name="test"
      label="Label"
    ></nr-input>
  `,
});
