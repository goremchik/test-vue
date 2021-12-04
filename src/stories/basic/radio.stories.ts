import NrRadio from '@/components/basic/Radio.vue';

export default { title: 'Radio' };

const items: any[] = [
  { text: 'text1', value: 'value1' },
  { text: 'text2', value: 'value2' },
  { text: 'text3', value: 'value3' },
];

export const radioWith1Option = (): unknown => ({
  components: { NrRadio },
  computed: {
    args: () => ({ items: items.slice(0, 1) }),
  },
  template: '<nr-radio v-bind="args" name="test"></nr-radio>',
});

export const radioWith2Options = (): unknown => ({
  components: { NrRadio },
  computed: {
    args: () => ({ items: items.slice(0, 2) }),
  },
  template: '<nr-radio v-bind="args" name="test"></nr-radio>',
});

export const radioWith3Options = (): unknown => ({
  components: { NrRadio },
  computed: {
    args: () => ({ items }),
  },
  template: '<nr-radio v-bind="args" name="test"></nr-radio>',
});
