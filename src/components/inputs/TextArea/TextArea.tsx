import { UIProvider } from '../../general';
import { TextAreaProps } from './TextArea.type';
import * as S from './textarea.styles';

export const TextArea = ({
  register,
  placeholder,
  error,
  width = '1052px',
  height = '170px',
  px = '20px',
  py = '20px',
  readOnly = false,
}: TextAreaProps) => {
  return (
    <UIProvider>
      <S.Wrapper
        $isError={error ? true : false}
        $width={width}
        $height={height}
        $px={px}
        $py={py}
      >
        <textarea {...register} placeholder={placeholder} readOnly={readOnly} />
        {error && <S.Validation>{error}</S.Validation>}
      </S.Wrapper>
    </UIProvider>
  );
};
