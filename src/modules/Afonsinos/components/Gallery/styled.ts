import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;