import React, { Component, createRef } from 'react';
import { FormFields } from 'pages/FormsPage/FormsPage';
import { v4 as uuidv4 } from 'uuid';
import s from './ReportForm.module.css';

interface ReportFormProps {
  onSubmit: (formFields: FormFields) => void;
}

interface ReportFormState {
  isValid: boolean;
}

export default class ReportForm extends Component<ReportFormProps, ReportFormState> {
  firstNameRef: React.RefObject<HTMLInputElement>;
  lastNameRef: React.RefObject<HTMLInputElement>;
  accidentDateRef: React.RefObject<HTMLInputElement>;
  locationRef: React.RefObject<HTMLSelectElement>;
  isAlienContactRef: React.RefObject<HTMLInputElement>;
  humanInjuriesRefYes: React.RefObject<HTMLInputElement>;
  humanInjuriesRefNo: React.RefObject<HTMLInputElement>;
  evidenceRef: React.RefObject<HTMLInputElement>;
  constructor(props: ReportFormProps) {
    super(props);
    this.firstNameRef = createRef();
    this.lastNameRef = createRef();
    this.accidentDateRef = createRef();
    this.locationRef = createRef();
    this.isAlienContactRef = createRef();
    this.humanInjuriesRefYes = createRef();
    this.humanInjuriesRefNo = createRef();
    this.evidenceRef = createRef();

    this.state = {
      isValid: false,
    };
  }

  validateForm = () => {
    return false;
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
    } else {
    }
  };

  componentDidMount() {
    console.log(this.firstNameRef.current?.value, 'value');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.reportForm}>
        <label htmlFor="firstName">
          <span>First name:</span>
          <input id="firstName" type="text" name="firstName" ref={this.firstNameRef} required />
        </label>
        <hr />

        <label htmlFor="lastName">
          <span>Last name:</span>
          <input id="lastName" type="text" name="lastName" ref={this.lastNameRef} required />
        </label>
        <hr />

        <label htmlFor="accidentDate">
          <span>Happened at:</span>
          <input
            id="accidentDate"
            type="date"
            name="accidentDate"
            ref={this.accidentDateRef}
            required
          />
        </label>
        <hr />

        <label htmlFor="location">
          {' '}
          <span>Accident location:</span>
          <select name="location" id="location" ref={this.locationRef} required>
            <option value="">Choose location</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
          </select>
        </label>
        <hr />

        <label htmlFor="isAlienContact">
          <span>Alien contact:</span>
          <input type="checkbox" name="isAlienContact" ref={this.isAlienContactRef} />
        </label>
        <hr />

        <p>Human injuries: </p>
        <label htmlFor="humanInjuriesYes">
          <span>Yes</span>
          <input
            id="humanInjuriesYes"
            type="radio"
            name="humanInjuries"
            value="Yes"
            ref={this.humanInjuriesRefYes}
            required
          />
        </label>
        <label htmlFor="humanInjuriesNo">
          <span>No</span>
          <input
            id="humanInjuriesNo"
            type="radio"
            name="humanInjuries"
            value="No"
            ref={this.humanInjuriesRefNo}
            required
          />
        </label>
        <hr />

        <label htmlFor="evidence">
          <span>Provide evidence:</span>
          <input type="file" name="evidence" ref={this.evidenceRef} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
