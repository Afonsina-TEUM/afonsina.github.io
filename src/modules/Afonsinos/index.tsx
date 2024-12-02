import { useState, useEffect, useRef } from "react";
import * as S from "./styled";
import { afonsinoFilters, afonsinos as afonsinosDB, type Afonsino } from "../../../db";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import { FadeIn } from "@utils/animations/FadeIn";

export const Afonsinos: React.FC = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
    const [selectedAfonsino, setSelectedAfonsino] = useState<Afonsino | null>(null);
    const [afonsinos, setAfonsinos] = useState<Afonsino[]>([]);
    const [generationLabel, setGenerationLabel] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDateSelect = (index: number) => {
        setSelectedDateIndex(index);
        setSelectedAfonsino(null);
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
        if (isModalOpen && selectedAfonsino) { // Only navigate if modal is open
            const currentIndex = afonsinos.indexOf(selectedAfonsino);
            if (event.key === "ArrowRight") {
                if (currentIndex < afonsinos.length - 1) {
                    setSelectedAfonsino(afonsinos[currentIndex + 1]); // Navigate to the next Afonsino
                }
            } else if (event.key === "ArrowLeft") {
                if (currentIndex > 0) {
                    setSelectedAfonsino(afonsinos[currentIndex - 1]); // Navigate to the previous Afonsino
                }
            }
        } else if (!isModalOpen) { // Only change generation if modal is closed
            if (event.key === "ArrowRight") {
                if (selectedDateIndex && selectedDateIndex < afonsinoFilters.generations.length - 1) {
                    handleDateSelect(selectedDateIndex + 1);
                }
            } else if (event.key === "ArrowLeft") {
                if (selectedDateIndex && selectedDateIndex > 0) {
                    handleDateSelect(selectedDateIndex - 1);
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedDateIndex, selectedAfonsino, isModalOpen]);

    useEffect(() => {
        if (selectedDateIndex !== null) {
            const currentGeneration = afonsinoFilters.generations[selectedDateIndex];
            const generationNumber = selectedDateIndex === 0 ? 0 : selectedDateIndex;
            const generationName = generationNumber === 0 ? "Fundadores" : `${generationNumber}º Geração`;

            setGenerationLabel(generationName);
            const loadedAfonsinos = currentGeneration.afonsinos.map((name: string) => afonsinosDB[name]);
            setAfonsinos(loadedAfonsinos);
        }
    }, [selectedDateIndex]);

    const timelineRef = useRef<HTMLDivElement | null>(null);

    const headerHeight = 160;

    useEffect(() => {
        if (selectedDateIndex !== null && timelineRef.current) {
            const topPosition = timelineRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }, [selectedDateIndex]);

    return (
        <S.AfonsinosStyled>
            <S.ContainerStyled>
                <div ref={timelineRef}>
                    <FadeIn delay={0.5}>
                        <Timeline 
                            generations={afonsinoFilters.generations} 
                            selectedDateIndex={selectedDateIndex} 
                            onDateSelect={handleDateSelect} 
                        />
                    </FadeIn>
                </div>
                {afonsinos.length > 0 && (
                    <Gallery 
                        afonsinos={afonsinos}
                        setSelectedAfonsino={(afonsino) => {
                            setSelectedAfonsino(afonsino);
                            setIsModalOpen(true); // Open modal when selecting an Afonsino
                        }}
                        generationLabel={generationLabel}
                        selectedDateIndex={selectedDateIndex}
                    />
                )}
                {selectedAfonsino && (
                    <Modal 
                        afonsino={selectedAfonsino} 
                        closeModal={() => {
                            setIsModalOpen(false);
                            setSelectedAfonsino(null);
                        }} 
                        afonsinos={afonsinos} 
                        setSelectedAfonsino={setSelectedAfonsino} 
                    />
                )}
            </S.ContainerStyled>
        </S.AfonsinosStyled>
    );
};
