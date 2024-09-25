import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px; // ajuste conforme necessário
`;

export const Poster = styled.img`
    width: 100%;
    max-width: 300px; // ajuste conforme necessário
    border-radius: 8px; // para bordas arredondadas
`;