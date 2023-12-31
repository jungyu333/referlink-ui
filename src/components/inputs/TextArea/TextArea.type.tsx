import { UseFormRegisterReturn } from 'react-hook-form';

export type TextAreaProps = {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  width?: string;
  height?: string;
  px?: string;
  py?: string;
  readOnly?: boolean;
};
