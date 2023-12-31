import { useState } from 'react';
import { TextInputProps } from './TextInput.type';
import * as S from './textinput.styles';
import { UIProvider } from '../../general';

export const TextInput = ({
  label,
  placeholder,
  error,
  register,
  width = '400px',
  height = '56px',
  isLabel = true,
  readonly = false,
}: TextInputProps) => {
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
              type="text"
              autoComplete="off"
              placeholder={placeholder}
              readOnly={readonly}
            />
          </div>
        </S.InnerContainer>

        {error && <S.Validation>{error}</S.Validation>}
      </S.Input>
    </UIProvider>
  );
};
