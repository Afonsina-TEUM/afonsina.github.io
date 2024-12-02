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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const ModalImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 40%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalHeader = styled.h2`
  text-align: center;
  margin: 20px 0 10px;
  font-size: 24px;
  color: #333;

  span {
    font-size: 16px;
    color: #888;
  }
`;

export const ModalText = styled.div`
  text-align: center;
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