import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import GlobalStyle from '../../styles/global';

type Props = {
  children: React.ReactNode;
};

export const UIProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
