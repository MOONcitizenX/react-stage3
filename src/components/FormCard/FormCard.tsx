import React from 'react';
import { FormData } from 'components/ReportForm/ReportForm.schema';
import s from './FormCard.module.css';

type FormCardProps = FormData;

const FormCard = (props: FormCardProps) => {
  return (
    <div className={s.cardWrapper}>
      <h4>Reporter:</h4>
      <p>{props.firstName + ' ' + props.lastName}</p>
      <h4>Date:</h4>
      <p>{new Date(props.accidentDate).toLocaleDateString()}</p>
      <h4>Location:</h4>
      <p>{props.location}</p>
      {props.isAlienContact ? <p>An alien contact</p> : <p>Not an alien contact</p>}
      {props.humanInjuries === 'Yes' ? (
        <p>Resulted in human injuries</p>
      ) : (
        <p>No one was injured</p>
      )}
      {props.evidence ? (
        <>
          <p>Evidence:</p>
          <img src={props.evidence} alt="Evidence image" className={s.image} />
        </>
      ) : (
        <p>No evidence provided</p>
      )}
    </div>
  );
};

export default FormCard;
