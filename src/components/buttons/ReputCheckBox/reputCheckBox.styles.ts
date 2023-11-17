import styled from 'styled-components';

export const Wrapper = styled.div<{ $isCheckable: boolean }>`
  display: flex;
  flex-direction: column;
  width: 76px;
  height: 87px;
  align-items: center;
  justify-content: space-evenly;
  gap: 23px;
  background-color: transparent;
  border: none;
  cursor: ${({ $isCheckable }) => $isCheckable && 'pointer'};

  & label {
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    cursor: inherit;
    letter-spacing: -0.32px;
  }
`;
