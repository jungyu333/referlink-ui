import type { Preview } from '@storybook/react';
import { theme } from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import React from 'react';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story {...context} />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
