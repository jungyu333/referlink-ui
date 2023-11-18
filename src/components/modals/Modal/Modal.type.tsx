import { ReactElement } from 'react';
import { Handler } from '../../../types';

export type ModalProps = {
  isOpen: boolean;
  onClose: Handler;
  children: ReactElement;
  px?: string;
  py?: string;
  gap?: string;
};
