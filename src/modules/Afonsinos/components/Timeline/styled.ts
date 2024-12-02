import styled from '@emotion/styled';

const yearFactor = 20;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column; /* Para adicionar o parágrafo abaixo dos botões */
  align-items: center; /* Centraliza os itens */
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os botões se movam para a linha seguinte */
  justify-content: center; /* Centraliza os botões */
  gap: 20px; /* Espaçamento maior entre os botões */
  position: relative; /* Para alinhar as linhas de progresso corretamente */
`;

export const StepCircle = styled.div<{ active: boolean, selected: boolean }>`
  width: 50px;
  height: 50px;
  padding: 10px; /* Mantendo o preenchimento */
  border-radius: 50%; /* Mudança para círculo perfeito */
  background-color: ${({ active }) => (active ? '#c16c45' : '#ccc')};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transform: ${({ selected }) => (selected ? 'scale(1.5)' : 'scale(1)')};
  transition: transform 0.3s ease-in-out, background-color 0.3s;
  white-space: nowrap;
`;

export const ProgressLine = styled.div<{ active: boolean, yearDifference: number }>`
  width: ${({ yearDifference }) => yearDifference * yearFactor}px;
  height: 4px;
  background-color: ${({ active }) => (active ? '#c16c45' : '#ccc')};
  transition: background-color 0.3s;
  align-self: center; /* Centraliza a linha em relação aos círculos */
  margin: -2px 0; /* Para centralizar visualmente entre os círculos */
`;