import { useState } from 'react';
import * as S from './passwordinput.styles';
import { PasswordInputProps } from './PasswordInput.type';
import { svgCloseEye, svgEye } from '../../../assets';

export const PasswordInput = ({
  label,
  placeholder,
  register,
  error,
  isLabel,
  width = '400px',
  height = '56px',
}: PasswordInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassWord, setIsShowPassWord] = useState(false);

  return (
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
            autoComplete="off"
            onBlur={() => setIsFocused(false)}
            type={isShowPassWord ? 'text' : 'password'}
            placeholder={placeholder}
          />

          <span onClick={() => setIsShowPassWord((prev) => !prev)}>
            {!isShowPassWord ? svgCloseEye : svgEye}
          </span>
        </div>
      </S.InnerContainer>

      {error && <S.Validation>{error}</S.Validation>}
    </S.Input>
  );
};
