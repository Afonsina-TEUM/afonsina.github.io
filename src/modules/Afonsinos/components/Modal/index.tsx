import React from 'react';
import { ModalOverlay, CloseButton } from './styled';
import { motion } from 'framer-motion';
import type { Afonsino } from '../../../../../db';
interface ModalProps {
  afonsino: Afonsino | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ afonsino, closeModal }) => {
  if (!afonsino) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <h2>{afonsino.alcunha}</h2>
        <p>{afonsino.curso}</p>
      </motion.div>
    </ModalOverlay>
  );
};

export default Modal;