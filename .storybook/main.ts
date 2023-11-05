const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (storybookConfig) => {
    storybookConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {},
        },
      ],
    });

    return storybookConfig;
  },
};

export default config;
