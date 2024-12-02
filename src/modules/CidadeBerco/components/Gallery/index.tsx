// src/components/Gallery.tsx
import React from 'react';
import { GalleryContainer, Poster } from './styled';
import { cbs, imgLocation, type CB } from '../../../../../db';

interface GalleryProps {
    setSelectedCB: (cb: CB) => void;
}



const Gallery: React.FC<GalleryProps> = ({ setSelectedCB }) => {
    return (
        <GalleryContainer>
            {cbs.map((cb, index) => (                
                <Poster key={index} src={imgLocation('posters/' + cb.imagem)} alt={`Cidade Berço ${index + 1}`} onClick={() => setSelectedCB(cb)} rectangular={cb.rectangular} />
            ))}
        </GalleryContainer>
    );
};

export default Gallery;