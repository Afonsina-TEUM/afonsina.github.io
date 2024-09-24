import React from 'react';
import { GalleryContainer, People, PersonCard } from './styled';

interface Person {
  name: string;
  image: string;
  info: string;
}

interface GalleryProps {
  people: Person[];
  setSelectedPerson: (person: Person) => void;
}

const Gallery: React.FC<GalleryProps> = ({ people, setSelectedPerson }) => {
  if (people.length === 0) return null;

  return (
    <GalleryContainer>
      <People>
        {people.map((person) => (
          <PersonCard key={person.name} onClick={() => setSelectedPerson(person)}>
            {
              person.image !== '' ? <img src={person.image} alt={person.name} /> : null
            }
            <p>{person.name}</p>
          </PersonCard>
        ))}
      </People>
    </GalleryContainer>
  );
};

export default Gallery;
