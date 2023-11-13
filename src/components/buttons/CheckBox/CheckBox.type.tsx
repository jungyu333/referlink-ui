import { Fonts } from '../../../constants';
import { Handler, ValueOf } from '../../../types';

export type CheckBoxProps = {
  isChecked: boolean;
  onCheck: Handler;
  label?: string;
  fontStyle?: ValueOf<typeof Fonts>;
};
