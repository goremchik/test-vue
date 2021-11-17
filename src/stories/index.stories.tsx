import { action } from '@storybook/addon-actions';
import MyButton from '../components/MyButton.vue';

export default {
  title: 'Button',
};

export const withText = (): unknown => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const withTSX = (): unknown => ({
  render() {
    return <MyButton>With TSX</MyButton>;
  },
});

export const withSomeEmoji = (): unknown => ({
  components: { MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>',
});
