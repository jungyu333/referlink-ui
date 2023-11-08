import { ReactElement } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  //onConfirm: () => void;
  // confirmLabel: string;
  // cancleLabel: string;
  // mainText: string;
  // subText: string;
  // secondLineText?: string;
};
