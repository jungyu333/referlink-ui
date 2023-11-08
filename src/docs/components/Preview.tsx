import React, { ReactElement } from 'react';
import styled from 'styled-components';

type PreviewProps = {
  children: ReactElement;
};

export const Preview = ({ children }: PreviewProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  padding: 30px;
  border-radius: 4px;
`;
