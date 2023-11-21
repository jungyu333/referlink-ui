import styled from 'styled-components';

export const LineText = styled.div<{ $width: string }>`
  display: flex;
  width: ${({ $width }) => $width};
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  & div {
    width: 113px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;
