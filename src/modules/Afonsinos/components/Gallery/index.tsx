import React from 'react';
import { GalleryContainer, GenerationLabel, Afonsinos, AfonsinoCard } from './styled';
import type { Afonsino } from '../../../../../db';

interface GalleryProps {
    afonsinos: Afonsino[];
    setSelectedAfonsino: (person: Afonsino) => void;
    generationLabel: string;
}

const Gallery: React.FC<GalleryProps> = ({ afonsinos, setSelectedAfonsino, generationLabel }) => {
    return (
        <GalleryContainer>
            <GenerationLabel>{generationLabel}</GenerationLabel> {}
            <Afonsinos>
                {afonsinos.map((afonsino) => (
                    <AfonsinoCard key={afonsino.alcunha} onClick={() => setSelectedAfonsino(afonsino)}>
                        <img src={afonsino.imagem} alt={afonsino.nome} />
                        <p>{afonsino.alcunha}</p>
                    </AfonsinoCard>
                ))}
            </Afonsinos>
        </GalleryContainer>
    );
};

export default Gallery;
