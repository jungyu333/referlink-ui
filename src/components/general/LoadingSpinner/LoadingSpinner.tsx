import { useEffect, useState } from 'react';
import { LoadingSpinnerProps } from './LoadingSpinner.type';
import * as S from './loadingSpinner.styles';
import { UIProvider } from '../UIProvider';
import { createPortal } from 'react-dom';

export const LoadingSpinner = ({
  isLoading,
  children,
}: LoadingSpinnerProps) => {
  return (
    <UIProvider>
      {children}
      {isLoading &&
        createPortal(
          <S.Wrapper>
            <S.Spinner />
          </S.Wrapper>,
          document.getElementsByTagName('body')[0],
        )}
    </UIProvider>
  );
};
