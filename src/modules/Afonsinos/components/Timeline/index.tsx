import React from 'react';
import { TimelineContainer, ProgressLine, StepCircle, ButtonContainer } from './styled';
import type { Generation } from '../../../../../db';

interface TimelineProps {
  generations: Generation[];
  selectedDateIndex: number | null;
  onDateSelect: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({ generations, selectedDateIndex, onDateSelect }) => {
    const getYearDifference = (startDate: string, endDate: string) => {
        return Math.abs(new Date(endDate).getFullYear() - new Date(startDate).getFullYear());
    };

    return (
      <TimelineContainer>
      <ButtonContainer>
        {generations.map((generation, index) => {
          const isActive = selectedDateIndex !== null && index <= selectedDateIndex;
          const isSelected = selectedDateIndex === index;
          const nextGeracao = generations[index + 1];
          const yearDifference = nextGeracao ? getYearDifference(generation.date.toString(), nextGeracao.date.toString()) : 0;

          return (
            <React.Fragment key={generation.date}>
              <StepCircle 
                active={isActive} 
                selected={isSelected}
                onClick={() => onDateSelect(index)}
              >
                {generation.date}
              </StepCircle>
              {index < generations.length - 1 && (
                <ProgressLine 
                  active={selectedDateIndex !== null && index < selectedDateIndex} 
                  yearDifference={yearDifference}  
                />
              )}
            </React.Fragment>
          );
        })}
      </ButtonContainer>
    </TimelineContainer>
  );
};

export default Timeline;
