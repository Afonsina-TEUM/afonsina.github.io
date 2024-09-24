import styled from '@emotion/styled';

const yearFactor = 20;

export const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const StepCircle = styled.div<{ active: boolean, selected: boolean }>`
  width: 40px;
  height: 40px;
  padding: 30px 30px;
  border-radius: 45%;
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
`;
