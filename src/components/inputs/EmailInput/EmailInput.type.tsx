import { UseFormRegisterReturn } from 'react-hook-form';

export type EmailInputProps = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  width?: string;
  height?: string;
  isLabel?: boolean;
  readOnly?: boolean;
};
