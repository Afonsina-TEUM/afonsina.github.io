import React from 'react';
import { TimelineContainer, ProgressLine, StepCircle } from './styled';

interface Event {
  date: string;
  people: { name: string; image: string; info: string }[];
}

interface TimelineProps {
  events: Event[];
  selectedDateIndex: number | null;
  onDateSelect: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, selectedDateIndex, onDateSelect }) => {
    const getYearDifference = (startDate: string, endDate: string) => {
        return Math.abs(new Date(endDate).getFullYear() - new Date(startDate).getFullYear());
    };

    return (
        <TimelineContainer>
      {events.map((event, index) => {
        const isActive = selectedDateIndex !== null && index <= selectedDateIndex;
        const isSelected = selectedDateIndex === index; // Verificamos se o botão está selecionado
        const nextEvent = events[index + 1];
        const yearDifference = nextEvent ? getYearDifference(event.date, nextEvent.date) : 0;

        return (
          <React.Fragment key={event.date}>
            <StepCircle 
              active={isActive} 
              selected={isSelected}  // Passamos a informação de seleção
              onClick={() => onDateSelect(index)}
            >
              {event.date}
            </StepCircle>
            {index < events.length - 1 && (
              <ProgressLine 
                active={selectedDateIndex !== null && index < selectedDateIndex} 
                yearDifference={yearDifference}  // Ajustamos a largura com base nos anos
              />
            )}
          </React.Fragment>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline;
