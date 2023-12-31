import { UseFormRegisterReturn } from 'react-hook-form';

export type PasswordInputProps = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  isLabel?: boolean;
  width?: string;
  height?: string;
  readOnly?: boolean;
};
