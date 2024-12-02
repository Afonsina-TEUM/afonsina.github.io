import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

export const GenerationLabel = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5em; /* Ajuste o tamanho da fonte como desejar */
  text-align: center; /* Centraliza a label */
  color: #333; /* Cor da fonte, ajuste conforme necessário */
`;

export const Afonsinos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const AfonsinoCard = styled.div`
  cursor: pointer;
  text-align: center;
  flex: 1 1 150px;
  max-width: 200px;
  margin-bottom: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 40%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.05);
  }

  p {
    margin: 5px 0 0;
  }
`;