import styled from 'styled-components';
import { ButtonTypes } from '../../../constants';

export const ButtonWrapper = styled.button<{
  $buttonType: string;
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
  background: ${({ theme, $buttonType }) =>
    $buttonType === ButtonTypes.filled
      ? theme.colors.primary1
      : theme.colors.white};
  color: ${({ theme, $buttonType }) =>
    $buttonType === ButtonTypes.filled
      ? theme.colors.white
      : theme.colors.grey2};
  font: ${({ theme, $fontStyle }) => theme.fonts[$fontStyle]};
  line-height: 150%;
  letter-spacing: -0.36px;
  border: ${({ $buttonType, theme }) =>
    $buttonType !== ButtonTypes.filled
      ? `1px solid ${theme.colors.grey1}`
      : `1px solid ${theme.colors.primary1} `};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $buttonType }) =>
      $buttonType === ButtonTypes.filled ? theme.colors.primary2 : ''};

    border: ${({ theme, $buttonType }) =>
      $buttonType === ButtonTypes.outlined
        ? `1px solid ${theme.colors.primary1} `
        : ''};

    color: ${({ theme, $buttonType }) =>
      $buttonType === ButtonTypes.outlined ? theme.colors.primary1 : ''};
  }
`;
