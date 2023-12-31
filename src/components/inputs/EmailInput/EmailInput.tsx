import { useState } from 'react';
import { EmailInputProps } from './EmailInput.type';
import * as S from './emailInput.styles';
import { UIProvider } from '../../general';

export const EmailInput = ({
  label,
  placeholder,
  error,
  register,
  width = '400px',
  height = '56px',
  isLabel = true,
  readOnly = false,
}: EmailInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <UIProvider>
      <S.Input $width={width}>
        <S.InnerContainer
          $height={height}
          $isFocused={isFocused}
          $isError={error ? true : false}
        >
          {isLabel && <label>{label}</label>}
          <div>
            <input
              onFocus={() => setIsFocused(true)}
              {...register}
              onBlur={() => setIsFocused(false)}
              autoComplete="off"
              type="email"
              placeholder={placeholder}
              readOnly={readOnly}
            />
          </div>
        </S.InnerContainer>

        {error && <S.Validation>{error}</S.Validation>}
      </S.Input>
    </UIProvider>
  );
};
