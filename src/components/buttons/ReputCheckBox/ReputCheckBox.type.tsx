import { Handler } from '../../../types';

export type ReputCheckBoxProps = {
  label: string;
  isChecked: boolean;
  onCheck?: Handler;
  isCheckable?: boolean;
};
