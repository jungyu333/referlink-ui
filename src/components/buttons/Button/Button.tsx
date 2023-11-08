import { Fonts } from '../../../constants/fonts';
import * as S from './button.styles';
import { UIProvider } from '../../general/UIProvider';
import { ButtonTypes } from '../../../constants/buttons';
import { svgMy } from '../../../assets';
import { ButtonProps } from './Button.type';

export const Button = ({
  buttonText,
  onClick,
  svgIcon,
  buttonType = ButtonTypes.filled,
  width = '400px',
  height = '58px',
  px = '24px',
  py = '26px',
  fontStyle = Fonts.subtitle2,
  isIcon = false,
}: ButtonProps) => {
  return (
    <UIProvider>
      <S.ButtonWrapper
        $width={width}
        $height={height}
        $buttonType={buttonType}
        onClick={onClick}
        $px={px}
        $py={py}
        $fontStyle={fontStyle}
      >
        <div>
          {isIcon && svgIcon}
          {buttonText}
        </div>
      </S.ButtonWrapper>
    </UIProvider>
  );
};
