import styled from 'styled-components';
import { ButtonTypes } from '../../../constants';

export const ButtonWrapper = styled.button<{
  $buttonType: string;
  $width: string;
  $height: string;
  $px: string;
  $py: string;
  $fontStyle: string;
  $isDisabled: boolean;
}>`
  display: inline-flex;
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
  background: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.colors.grey1 : ''};
  color: ${({ theme, $buttonType }) =>
    $buttonType === ButtonTypes.filled
      ? theme.colors.white
      : theme.colors.grey2};
  color: ${({ $isDisabled, theme }) => ($isDisabled ? theme.colors.white : '')};

  font: ${({ theme, $fontStyle }) => theme.fonts[$fontStyle]};

  letter-spacing: -0.36px;
  border: ${({ $buttonType, theme }) =>
    $buttonType !== ButtonTypes.filled
      ? `1px solid ${theme.colors.grey1}`
      : `1px solid ${theme.colors.primary1} `};

  border: ${({ $isDisabled }) => $isDisabled && 'none'};
  cursor: pointer;

  & > div {
    & svg {
      & > * {
        fill: ${({ theme, $buttonType }) =>
          $buttonType === ButtonTypes.filled
            ? theme.colors.white
            : theme.colors.grey2};

        fill: ${({ theme, $isDisabled }) =>
          $isDisabled ? theme.colors.white : ''};
      }
    }
  }

  &:hover {
    background-color: ${({ theme, $buttonType, $isDisabled }) =>
      $buttonType === ButtonTypes.filled && !$isDisabled
        ? theme.colors.primary2
        : ''};

    border: ${({ theme, $buttonType, $isDisabled }) =>
      $buttonType === ButtonTypes.outlined && !$isDisabled
        ? `1px solid ${theme.colors.primary1} `
        : ''};

    color: ${({ theme, $buttonType, $isDisabled }) =>
      $buttonType === ButtonTypes.outlined && !$isDisabled
        ? theme.colors.primary1
        : ''};

    & > div {
      & svg {
        & > * {
          fill: ${({ theme, $buttonType, $isDisabled }) =>
            $buttonType === ButtonTypes.outlined && !$isDisabled
              ? theme.colors.primary1
              : ''};
        }
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
