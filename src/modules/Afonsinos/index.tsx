import { type FC, useState } from "react";
import * as S from "./styled";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Timeline from "./components/Timeline";

interface Person {
    name: string;
    image: string;
    info: string;
  }

interface Event {
    date: string;
    people: Person[];
  }
  
  const events: Event[] = [
    {
      date: '1994',
      people: [
        { name: 'Maria Rodrigues', image: '', info: 'João Silva nasceu em 1990.' },
        { name: 'asdasd asd', image: '', info: 'Maria Santos começou a trabalhar em 1990.' },
      ],
    },
    {
      date: '1996',
      people: [
        { name: 'João Silva', image: '', info: 'João Silva nasceu em 1990.' },
        { name: 'Maria Santos', image: '', info: 'Maria Santos começou a trabalhar em 1990.' },
      ],
    },
    {
      date: '1997',
      people: [
        { name: 'João Silva', image: '', info: 'João Silva nasceu em 1990.' },
        { name: 'Maria Santos', image: '', info: 'Maria Santos começou a trabalhar em 1990.' },
      ],
    },
    {
      date: '2024',
      people: [
        { name: 'Carlos Pereira', image: '', info: 'Carlos Pereira fez sua primeira viagem em 2000.' },
      ],
    },
    // Adicionar mais eventos conforme necessário
];

export const Afonsinos: FC = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const handleDateSelect = (index: number) => {
        setSelectedDateIndex(index);
        setSelectedPerson(null); // Reset selected person on date change
    };

    const currentEvent = selectedDateIndex !== null ? events[selectedDateIndex] : null;

    return (
        <S.AfonsinosStyled>
            <S.ContainerStyled>
                <Timeline 
                    events={events} 
                    selectedDateIndex={selectedDateIndex} 
                    onDateSelect={handleDateSelect} 
                />
                {currentEvent && (
                    <Gallery people={currentEvent.people} setSelectedPerson={setSelectedPerson} />
                )}
                {selectedPerson && (
                    <Modal person={selectedPerson} closeModal={() => setSelectedPerson(null)} />
                )}
            </S.ContainerStyled>
        </S.AfonsinosStyled>
    );
};
