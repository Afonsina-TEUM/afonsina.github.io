// src/components/styled.ts
import styled from "@emotion/styled";

interface PosterProps {
    rectangular?: boolean;
}

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px; // ajuste conforme necessário
`;

export const Poster = styled.img<PosterProps>`
    height: 300px; // altura fixa para ambos os posters
    width: ${({ rectangular }) => (rectangular ? 'auto' : '200px')};

    max-width: ${({ rectangular }) => (rectangular ? '400px' : '200px')};
    object-fit: cover; // garante que a imagem preencha sem distorcer
    border-radius: 8px; // bordas arredondadas

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;
