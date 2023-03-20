import { FormFields } from 'pages/FormsPage';
import React, { Component, createRef } from 'react';

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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">
          First name:
          <input id="firstName" type="text" name="firstName" ref={this.firstNameRef} />
        </label>

        <label htmlFor="lastName">
          Last name:
          <input id="lastName" type="text" name="lastName" ref={this.lastNameRef} />
        </label>

        <label htmlFor="accidentDate">
          Happened at:
          <input id="accidentDate" type="date" name="accidentDate" ref={this.accidentDateRef} />
        </label>

        <label>
          {' '}
          Accident location:
          <select name="location" id="location" ref={this.locationRef}>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
          </select>
        </label>

        <label htmlFor="isAlienContact">
          Alien contact:
          <input type="checkbox" name="isAlienContact" ref={this.isAlienContactRef} />
        </label>

        <label htmlFor="humanInjuriesYes">
          Yes
          <input
            id="humanInjuriesYes"
            type="radio"
            name="humanInjuries"
            value="Yes"
            ref={this.humanInjuriesRefYes}
          />
        </label>
        <label htmlFor="humanInjuriesNo">
          No
          <input
            id="humanInjuriesNo"
            type="radio"
            name="humanInjuries"
            value="No"
            ref={this.humanInjuriesRefNo}
          />
        </label>

        <label htmlFor="evidence">
          Provide evidence:
          <input type="file" name="evidence" ref={this.evidenceRef} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
