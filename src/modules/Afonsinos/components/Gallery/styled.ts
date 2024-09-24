import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const People = styled.div`
  display: flex;
  gap: 10px;
`;

export const PersonCard = styled.div`
  cursor: pointer;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
