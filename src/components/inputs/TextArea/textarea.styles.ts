import styled from 'styled-components';

export const Wrapper = styled.div<{
  $isError: boolean;
  $width: string;
  $height: string;
  $px: string;
  $py: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & textarea {
    display: flex;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: ${({ $px, $py }) => `${$py} ${$px}`};
    justify-content: center;
    align-items: flex-start;
    border-radius: 16px;
    resize: none;
    border: none;
    outline: 1px solid
      ${({ theme, $isError }) =>
        $isError ? theme.colors.error : theme.colors.grey1};
    &:focus {
      outline: 1px solid
        ${({ theme, $isError }) =>
          $isError ? theme.colors.error : theme.colors.primary1};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font: ${({ theme }) => theme.fonts.body};
      letter-spacing: -0.32px;
    }
  }
`;

export const Validation = styled.span`
  display: flex;
  align-items: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.26px;
`;
