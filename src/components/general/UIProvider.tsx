import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

type Props = {
  children: React.ReactNode;
};

export const UIProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
