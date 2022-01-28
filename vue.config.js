// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule
      .use('file-loader')
      .loader('image-webpack-loader')
      .tap((options = {}) => ({
        ...options,
        pngquant: { quality: [0.65, 0.9], speed: 4 },
      }));

    config.resolve.alias.set('@mock', path.resolve(__dirname, 'mock'));

    if (process.env.NODE_ENV === 'test') {
      const scssRule = config.module.rule('scss');
      scssRule.uses.clear();
      scssRule.use('null-loader').loader('null-loader');
      config.externals({
        canvas: '{}',
        bufferutil: '{}',
        'utf-8-validate': '{}',
      });
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/common/index.scss";`,
      },
    },
  },
};
