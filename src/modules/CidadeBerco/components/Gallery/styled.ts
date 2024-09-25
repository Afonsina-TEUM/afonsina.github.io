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

    img {
        width: 120px;
        height: 120px;
        border-radius: 40%;
        transition: transform 0.2s ease-in-out;
    }

    &:hover img {
        transform: scale(1.2);
    }

    &:hover {
        transform: scale(1.05);
    }

    p {
        margin: 5px 0 0;
    }
`;