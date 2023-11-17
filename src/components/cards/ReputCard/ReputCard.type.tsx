import { Handler } from '../../../types';

export type ReputCardProps = {
  mainContent: string;
  headContent: string;
  date: string;
  onClick: Handler;
  isChecked?: boolean;
};
