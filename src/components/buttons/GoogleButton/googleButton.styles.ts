import styled from 'styled-components';

export const OnGoogle = styled.button<{
  $width: string;
  $height: string;
  $fontStyle: string;
}>`
  display: flex;
  padding: 13px 118px 13px 24px;
  align-items: center;
  gap: 94px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font: ${({ theme, $fontStyle }) => theme.fonts[$fontStyle]};
  letter-spacing: -0.36px;
`;
