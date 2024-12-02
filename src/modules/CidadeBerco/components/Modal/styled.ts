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
  max-width: 800px;
  width: 100%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  overflow-x: hidden; // Impede o conteúdo de transbordar horizontalmente
  overflow-y: auto;  // Permite rolagem vertical se necessário
  max-height: 80vh;  // Limita a altura máxima da modal e adiciona rolagem se o conteúdo for muito longo
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
  text-align: left;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
  word-wrap: break-word; // Quebra palavras longas para evitar overflow horizontal
  word-break: break-word; // Garante a quebra de palavras longas
  white-space: normal; // Permite que o texto quebre linhas corretamente
  overflow-wrap: break-word; // Quebra palavras muito longas

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
