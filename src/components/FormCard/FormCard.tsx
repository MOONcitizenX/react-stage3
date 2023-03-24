import React, { Component } from 'react';
import { FormFields } from 'pages/FormsPage/FormsPage';
import s from './FormCard.module.css';

type FormCardProps = Omit<FormFields, 'id'>;

export default class FormCard extends Component<FormCardProps> {
  render() {
    return (
      <div className={s.cardWrapper}>
        <h4>Reporter:</h4>
        <p>{this.props.firstName + ' ' + this.props.lastName}</p>
        <h4>Date:</h4>
        <p>{this.props.date}</p>
        <h4>Location:</h4>
        <p>{this.props.location}</p>
        {this.props.isAlienContact ? <p>An alien contact</p> : <p>Not an alien contact</p>}
        {this.props.humanInjuries ? <p>Resulted in human injuries</p> : <p>No one was injured</p>}
        {this.props.file ? (
          <>
            <p>Evidence:</p>
            <img src={this.props.file} alt="Evidence image" className={s.image} />
          </>
        ) : (
          <p>No evidence provided</p>
        )}
      </div>
    );
  }
}
