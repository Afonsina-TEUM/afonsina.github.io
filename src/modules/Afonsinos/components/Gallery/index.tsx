import React from 'react';
import { GalleryContainer, GenerationLabel, Afonsinos, AfonsinoCard } from './styled';
import { type Afonsino } from '../../../../../db';
import { FadeIn } from '@utils/animations/FadeIn';
import { Badge } from '@components/Badge';

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
                        {afonsino.isEnsaiador && (
                            <Badge style={{ backgroundColor: afonsino.lastEnsaiador ? 'green' : '' }}>
                                {afonsino.lastEnsaiador ? 'Ensaiador (Atual)' : 'Ensaiador'}
                            </Badge>
                        )}
                        {afonsino.isMagister && (
                            <Badge style={{ backgroundColor: afonsino.lastMagister ? 'green' : '' }}>
                                {afonsino.lastMagister ? 'Magister (Atual)' : 'Magister'}
                            </Badge>
                        )}
                    </AfonsinoCard>
                ))}
                </Afonsinos>
            </FadeIn>
        </GalleryContainer>
    );
};

export default Gallery;
