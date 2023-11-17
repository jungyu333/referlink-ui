import { svgReputCheck, svgReputUnCheck } from '../../../assets';
import { UIProvider } from '../../general';
import { ReputCheckBoxProps } from './ReputCheckBox.type';
import * as S from './reputCheckBox.styles';

export const ReputCheckBox = ({
  isChecked,
  label,
  onCheck,
  isCheckable = true,
}: ReputCheckBoxProps) => {
  return (
    <UIProvider>
      <S.Wrapper
        onClick={isCheckable ? onCheck : undefined}
        $isCheckable={isCheckable}
      >
        <div>{isChecked ? svgReputCheck : svgReputUnCheck}</div>
        {label && <label>{label}</label>}
      </S.Wrapper>
    </UIProvider>
  );
};
