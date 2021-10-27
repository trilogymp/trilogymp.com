module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/preset-scss',
    '@washingtonpost/storybook-addon-web-vitals',
    'storybook-addon-designs',
  ],
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.js'],
};
