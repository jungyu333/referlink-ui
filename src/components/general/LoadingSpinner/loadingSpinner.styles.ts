import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${rotate} 1s linear infinite;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 9999;
  transition: opacity 1 ease-out;
`;
