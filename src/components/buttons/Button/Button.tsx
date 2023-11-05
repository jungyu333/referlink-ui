import { ButtonProps } from 'src/components/buttons/Button/Button.type';
import { Fonts } from '../../../constants/fonts';
import * as S from './button.styles';
import { UIProvider } from '../../general/UIProvider';

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
    <UIProvider>
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
    </UIProvider>
  );
};
