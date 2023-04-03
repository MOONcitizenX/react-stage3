import React, { useState } from 'react';
import s from './Card.module.css';
import CardModal from 'components/CardModal/CardModal';

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  species: string[];
  url: string;
}

interface CardProps {
  person: Person;
}

const Card = ({ person }: CardProps) => {
  const [isFull, setIsFull] = useState<boolean>(false);

  const handleModalSwitch = () => {
    setIsFull((prev) => !prev);
  };

  return (
    <div className={s.cardWrapperTable} data-testid={'individualCard'} onClick={handleModalSwitch}>
      <h3 className={s.title}>Character: {person.name}</h3>
      <p className={s.stock}>Gender: {person.gender}</p>
      <p className={s.stock}>Height: {person.height}</p>
      <p className={s.stock}>Mass: {person.mass}</p>
      {isFull && <CardModal person={person} onClick={handleModalSwitch} />}
    </div>
  );
};

export default Card;
