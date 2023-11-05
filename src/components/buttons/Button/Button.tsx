import { ButtonProps } from 'src/components/buttons/Button/Button.type';
import { Fonts } from '../../../constants/fonts';
import { theme } from '../../../styles/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './button.styles';

export const Button = ({
  buttonText,
  onClick,
  isPrimary = true,
  width = '400px',
  height = '58px',
  px = '24px',
  py = '26px',
  fontStyle = Fonts.subtitle2,
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <S.ButtonWrapper
        $width={width}
        $height={height}
        $isPrimary={isPrimary}
        onClick={onClick}
        $px={px}
        $py={py}
        $fontStyle={fontStyle}
      >
        {buttonText}
      </S.ButtonWrapper>
    </ThemeProvider>
  );
};
