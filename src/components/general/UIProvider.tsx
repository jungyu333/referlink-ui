import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import { theme } from '../../styles';

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
