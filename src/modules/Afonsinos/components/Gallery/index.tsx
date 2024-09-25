import React from 'react';
import { GalleryContainer, GenerationLabel, Afonsinos, AfonsinoCard } from './styled';
import type { Afonsino } from '../../../../../db';
import { FadeIn } from '@utils/animations/FadeIn';

interface GalleryProps {
    afonsinos: Afonsino[];
    setSelectedAfonsino: (person: Afonsino) => void;
    generationLabel: string;
    selectedDateIndex: number | null;
}

const Gallery: React.FC<GalleryProps> = ({ afonsinos, setSelectedAfonsino, generationLabel, selectedDateIndex }) => {
    return (
        <GalleryContainer>
            <GenerationLabel>{generationLabel}</GenerationLabel> {}
            <FadeIn key={selectedDateIndex} delay={0.1}>
                <Afonsinos>
                {afonsinos.map((afonsino) => (
                    <AfonsinoCard key={afonsino.alcunha} onClick={() => setSelectedAfonsino(afonsino)}>
                        <img src={afonsino.imagem} alt={afonsino.nome} />
                        <p>{afonsino.alcunha}</p>
                    </AfonsinoCard>
                ))}
                </Afonsinos>
            </FadeIn>
        </GalleryContainer>
    );
};

export default Gallery;
