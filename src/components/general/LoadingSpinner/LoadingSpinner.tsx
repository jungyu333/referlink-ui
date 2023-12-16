import { useEffect, useState } from 'react';
import { LoadingSpinnerProps } from './LoadingSpinner.type';
import * as S from './loadingSpinner.styles';
import { UIProvider } from '../UIProvider';

export const LoadingSpinner = ({
  isLoading,
  children,
}: LoadingSpinnerProps) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsVisible(false), 500);

      return () => clearTimeout(timer);
    }
    setIsVisible(true);
  }, [isLoading]);

  return (
    <UIProvider>
      {isVisible ? (
        <S.Wrapper $isVisible={isVisible}>
          <S.Spinner />
        </S.Wrapper>
      ) : (
        children
      )}
    </UIProvider>
  );
};
