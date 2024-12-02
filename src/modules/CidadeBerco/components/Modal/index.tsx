import React from 'react';
import { ModalOverlay, CloseButton, ModalContent, ModalImage, ModalHeader, ModalText, ModalInfo } from './styled';
import { motion } from 'framer-motion';
import { imgLocation, type CB } from '../../../../../db';

interface ModalProps {
  cb: CB | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ cb, closeModal }) => {
  if (!cb) return null;

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
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <ModalImage src={imgLocation('posters/' + cb.imagem)} alt={cb.nome} />
            <ModalInfo>
              <ModalHeader>{cb.nome}</ModalHeader>
              <ModalText>
                <strong>Data: </strong>{cb.data}
                {cb.tunas_concurso.length > 0 && (
                  <>
                    <br />
                    <strong>Tunas a Concurso:</strong> {cb.tunas_concurso.join(', ')}
                  </>
                )}
                {cb.playlist && (
                  <>
                    <br />
                    <strong>Playlist:</strong> {cb.playlist}
                  </>
                )}
              </ModalText>
            </ModalInfo>
          </div>
        </ModalContent>
      </motion.div>
    </ModalOverlay>
  );
};

export default Modal;