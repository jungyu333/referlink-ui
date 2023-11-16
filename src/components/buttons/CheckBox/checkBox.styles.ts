import styled from 'styled-components';

export const Wrapper = styled.button<{ $fontStyle: string }>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 4px;
  cursor: pointer;
  width: fit-content;
  & label {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme, $fontStyle }) => theme.fonts[$fontStyle]};
    cursor: pointer;
    letter-spacing: -0.26px;
  }
`;
