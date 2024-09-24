import { useState, useEffect } from "react";
import * as S from "./styled";
import { afonsinoFilters, afonsinos as afonsinosDB, type Afonsino } from "../../../db";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";

export const Afonsinos: React.FC = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
    const [selectedAfonsino, setSelectedAfonsino] = useState<any | null>(null); // Mude para um tipo mais específico se possível
    const [afonsinos, setAfonsinos] = useState<Afonsino[]>([]); // Estado para armazenar as pessoas
    const [generationLabel, setGenerationLabel] = useState<string>("");

    const handleDateSelect = (index: number) => {
        setSelectedDateIndex(index);
        setSelectedAfonsino(null);
    };

    useEffect(() => {
        if (selectedDateIndex !== null) {
            const currentGeneration = afonsinoFilters.generations[selectedDateIndex];
            const generationNumber = selectedDateIndex === 0 ? 0 : selectedDateIndex; // Define a geração
            const generationName = generationNumber === 0 ? "Fundadores" : `${generationNumber}º Geração`; // Geração

            setGenerationLabel(generationName);

            const loadedAfonsinos = currentGeneration.afonsinos.map((name: string) => afonsinosDB[name]);
            setAfonsinos(loadedAfonsinos);
        }
    }, [selectedDateIndex]);

    return (
        <S.AfonsinosStyled>
            <S.ContainerStyled>
                <Timeline 
                    generations={afonsinoFilters.generations} 
                    selectedDateIndex={selectedDateIndex} 
                    onDateSelect={handleDateSelect} 
                />
                {afonsinos.length > 0 && (
                    <Gallery 
                        afonsinos={afonsinos} 
                        setSelectedAfonsino={setSelectedAfonsino}
                        generationLabel={generationLabel} 
                    />
                )}
                {selectedAfonsino && (
                    <Modal afonsino={selectedAfonsino} closeModal={() => setSelectedAfonsino(null)} />
                )}
            </S.ContainerStyled>
        </S.AfonsinosStyled>
    );
};