import ReactModal from 'react-modal';
import { ModalProps } from './Modal.type';

export const Modal = ({
  isOpen,
  onClose,
  children,
  px = '48px',
  py = '60px',
  gap = '35px',
}: ModalProps) => {
  return (
    <ReactModal
      style={{
        content: {
          display: 'inline-flex',
          padding: `${px} ${py}`,
          flexDirection: 'column',
          alignItems: 'center',
          gap: `${gap}`,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          borderRadius: '16px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  );
};
