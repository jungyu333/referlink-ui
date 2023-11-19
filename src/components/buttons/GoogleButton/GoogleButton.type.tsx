import { Fonts } from '../../../constants';
import { Handler, ValueOf } from '../../../types';

export type GoogleButtonProps = {
  buttonText: string;
  onClick: Handler;
  width?: string;
  height?: string;
  fontStyle?: ValueOf<typeof Fonts>;
};
