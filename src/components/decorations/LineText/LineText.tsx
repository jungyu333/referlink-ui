import { LineTextProps } from './LineText.type';
import * as S from './lineText.styles';

export const LineText = ({ label, width = '400px' }: LineTextProps) => {
  return (
    <S.LineText $width={width}>
      <div />
      {label}
      <div />
    </S.LineText>
  );
};
