import { svgGoogle } from '../../../assets';
import { Fonts } from '../../../constants';
import { UIProvider } from '../../general';
import { GoogleButtonProps } from './GoogleButton.type';
import * as S from './googleButton.styles';

export const GoogleButton = ({
  buttonText,
  onClick,
  fontStyle = Fonts.subtitle2,
  width = '400px',
  height = '58px',
}: GoogleButtonProps) => {
  return (
    <UIProvider>
      <S.OnGoogle
        onClick={onClick}
        $width={width}
        $height={height}
        $fontStyle={fontStyle}
      >
        {svgGoogle}
        <div>{buttonText}</div>
      </S.OnGoogle>
    </UIProvider>
  );
};
