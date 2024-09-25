import React, { useEffect } from 'react';
import { ModalOverlay, CloseButton, ModalContent, ModalImage, ModalHeader, ModalText } from './styled';
import { motion } from 'framer-motion';
import type { Afonsino } from '../../../../../db';

interface ModalProps {
  afonsino: Afonsino | null;
  closeModal: () => void;
  afonsinos: Afonsino[]; // Add this prop to receive the list of Afonsinos
  setSelectedAfonsino: (afonsino: Afonsino) => void; // Function to update the selected Afonsino
}

const Modal: React.FC<ModalProps> = ({ afonsino, closeModal, afonsinos, setSelectedAfonsino }) => {
  if (!afonsino) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = afonsinos.findIndex(a => a.alcunha === afonsino.alcunha);
      let newIndex = currentIndex;

      if (event.key === 'ArrowRight') {
        newIndex = (currentIndex + 1) % afonsinos.length; // Wrap around to the start
      } else if (event.key === 'ArrowLeft') {
        newIndex = (currentIndex - 1 + afonsinos.length) % afonsinos.length; // Wrap around to the end
      }

      if (newIndex !== currentIndex) {
        setSelectedAfonsino(afonsinos[newIndex]); // Update the selected Afonsino
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [afonsino, afonsinos, setSelectedAfonsino]);

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
          <ModalImage src={afonsino.imagem} alt={afonsino.nome} />
          <ModalHeader>
            {afonsino.nome}&nbsp;
            <span style={{ whiteSpace: 'nowrap' }}>
              ({afonsino.alcunha})
            </span>
          </ModalHeader>
          <ModalText>
            {afonsino.curso && (
              <>
                <strong>Curso:</strong> {afonsino.curso}<br />
              </>
            )}
            {afonsino.instrumento && (
              <>
                <strong>Instrumento:</strong> {afonsino.instrumento}<br />
              </>
            )}
            {afonsino.passagem_evento && (
              <>
                <strong>Passagem:</strong> {afonsino.passagem_evento}, {afonsino.passagem_local}, {afonsino.passagem_data}
              </>
            )}
          </ModalText>
        </ModalContent>
      </motion.div>
    </ModalOverlay>
  );
};

export default Modal;
