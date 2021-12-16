import Image from '@/components/basic/Image.vue';

export default { title: 'Image' };

export const image = (): unknown => ({
  components: { 'nr-image': Image },
  template: `
    <nr-image
      src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/pulp-fiction-cover-i1288.jpg"
    ></nr-image>`,
});
