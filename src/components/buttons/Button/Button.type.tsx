import { ButtonTypes } from '../../../constants/buttons';
import { Fonts } from '../../../constants';
import { Handler, ValueOf } from '../../../types';

export type ButtonProps = {
  buttonText: string;
  svgIcon?: JSX.Element;
  width?: string;
  height?: string;
  onClick?: Handler<() => void>;
  buttonType?: ValueOf<typeof ButtonTypes>;
  px?: string;
  py?: string;
  fontStyle?: ValueOf<typeof Fonts>;
  isIcon?: boolean;
  isDisabled?: boolean;
};
