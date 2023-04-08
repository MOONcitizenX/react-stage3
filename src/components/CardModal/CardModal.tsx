import React from 'react';
import ReactDOM from 'react-dom';
import s from './CardModal.module.css';
import { Person } from 'components/Card/Card';

interface CardModalProps {
  person: Person;
  onClick: () => void;
}

const CardModal = ({ person, onClick }: CardModalProps) => {
  const modalRoot = document.getElementById('modal') as HTMLDivElement;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={s.modalWrapper} onClick={(e) => e.stopPropagation()}>
          <div className={s.cardWrapperTable}>
            <h3 className={s.title}>{person.name}</h3>
            <p className={s.stock}>Gender: {person.gender}</p>
            <p className={s.stock}>Height: {person.height}</p>
            <p className={s.stock}>Mass: {person.mass}</p>
            <p className={s.stock}>Birth year: {person.birth_year}</p>
            <p className={s.stock}>Hair color: {person.hair_color}</p>
            <p className={s.stock}>Skin color: {person.skin_color}</p>
            <p className={s.stock}>Eye color: {person.eye_color}</p>
            <button className={s.close} onClick={onClick}>
              X
            </button>
          </div>
        </div>,
        modalRoot
      )}
    </React.Fragment>
  );
};

export default CardModal;
