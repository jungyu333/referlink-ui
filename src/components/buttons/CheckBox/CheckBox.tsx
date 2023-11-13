import { CheckBoxProps } from './CheckBox.type';
import { svgCheck24, svgUnCheck } from '../../../assets';
import * as S from './checkBox.styles';
import { UIProvider } from '../../general';
import { Fonts } from '../../../constants';

export const CheckBox = ({
  label,
  isChecked,
  onCheck,
  fontStyle = Fonts.caption,
}: CheckBoxProps) => {
  return (
    <UIProvider>
      <S.Wrapper onClick={onCheck} $fontStyle={fontStyle}>
        <div>{isChecked ? svgCheck24 : svgUnCheck}</div>
        {label && <label>{label}</label>}
      </S.Wrapper>
    </UIProvider>
  );
};
