import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  $isPrimary: boolean;
  $width: string;
  $height: string;
  $px: string;
  $py: string;
  $fontStyle: string;
}>`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $py }) => $py} ${({ $px }) => $px};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary1 : theme.colors.white};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.white : theme.colors.primary1};
  font: ${({ theme, $fontStyle }) => theme.fonts[$fontStyle]};
  line-height: 150%;
  letter-spacing: -0.36px;
  border: ${({ $isPrimary, theme }) =>
    !$isPrimary
      ? `1px solid ${theme.colors.grey1}`
      : `1px solid ${theme.colors.primary1} `};
  cursor: pointer;
`;
