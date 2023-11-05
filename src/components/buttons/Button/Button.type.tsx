import { Fonts } from 'src/constants';
import { ValueOf } from 'src/types';

export type ButtonProps = {
  buttonText: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  isPrimary?: boolean;
  px?: string;
  py?: string;
  fontStyle?: ValueOf<typeof Fonts>;
};
