import * as S from './reputCard.styles';
import { svgDate } from '../../../assets';
import { UIProvider } from '../../general';
import { ReputCardProps } from './ReputCard.type';
import { CheckBox } from '../../buttons';

export const ReputCard = ({
  mainContent,
  headContent,
  date,
  onClick,
  isChecked = false,
}: ReputCardProps) => {
  return (
    <UIProvider>
      <S.Wrapper onClick={onClick}>
        <S.Main>
          <div>
            <h1>{headContent}</h1>

            <CheckBox isChecked={isChecked} label="평판 비공개" />
          </div>

          <p>{mainContent}</p>
        </S.Main>

        <section />

        {date && (
          <S.DateContainer>
            {svgDate}

            <p>{date}</p>
          </S.DateContainer>
        )}
      </S.Wrapper>
    </UIProvider>
  );
};
