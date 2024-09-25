import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // Certifique-se de que este valor é maior que o header
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  max-width: 800px; // Aumentar a largura máxima se necessário
  width: 100%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
`;

export const ModalImage = styled.img`
  width: 400px;
  object-fit: cover;
  margin-right: 20px; // Espaçamento entre a imagem e as informações
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalInfo = styled.div`
  flex: 1; // Permite que esta seção ocupe o espaço restante
`;

export const ModalHeader = styled.h2`
  text-align: left; // Alinhar o texto à esquerda
  margin: 0 0 10px;
  font-size: 24px;
  color: #333;
`;

export const ModalText = styled.div`
  text-align: left; // Alinhar o texto à esquerda
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin: 10px 0;

  strong {
    color: #333;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;
