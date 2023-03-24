import React, { Component, createRef } from 'react';
import { FormFields } from 'pages/FormsPage/FormsPage';
import { v4 as uuidv4 } from 'uuid';
import s from './ReportForm.module.css';
import { validateDate, validateFile, validateName } from 'utils/validators';

interface ReportFormProps {
  onSubmit: (formFields: FormFields) => void;
}

interface ReportFormState {
  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isDateValid: boolean;
  isLocationValid: boolean;
  isInjuriesValid: boolean;
  isFileValid: boolean;
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
      isFirstNameValid: true,
      isLastNameValid: true,
      isDateValid: true,
      isLocationValid: true,
      isInjuriesValid: true,
      isFileValid: true,
    };
  }

  validateForm = () => {
    const isFirstNameValid = validateName(this.firstNameRef.current?.value);
    const isLastNameValid = validateName(this.lastNameRef.current?.value);
    const isDateValid = validateDate(this.accidentDateRef.current?.value);
    const isLocationValid = Boolean(this.locationRef.current?.value);
    const isInjuriesValid =
      this.humanInjuriesRefYes.current!.checked || this.humanInjuriesRefNo.current!.checked;
    const noFile = !this.evidenceRef.current?.value;
    const isFileValid = validateFile(this.evidenceRef.current?.value) || noFile;
    this.setState({
      isFirstNameValid,
      isLastNameValid,
      isDateValid,
      isLocationValid,
      isInjuriesValid,
      isFileValid,
    });

    return (
      isFirstNameValid &&
      isLastNameValid &&
      isDateValid &&
      isLocationValid &&
      isInjuriesValid &&
      isFileValid
    );
  };

  resetForm = () => {
    this.firstNameRef.current!.value = '';
    this.lastNameRef.current!.value = '';
    this.accidentDateRef.current!.value = '';
    this.locationRef.current!.value = '';
    this.isAlienContactRef.current!.checked = false;
    this.humanInjuriesRefYes.current!.checked = false;
    this.humanInjuriesRefNo.current!.checked = false;
    this.evidenceRef.current!.value = '';
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isFormValid = this.validateForm();
    if (isFormValid) {
      const formData = {
        id: uuidv4(),
        firstName: this.firstNameRef.current!.value,
        lastName: this.lastNameRef.current!.value,
        date: this.accidentDateRef.current!.value,
        location: this.locationRef.current!.value,
        isAlienContact: this.isAlienContactRef.current!.checked,
        humanInjuries: this.humanInjuriesRefYes.current!.checked,
        file: URL.createObjectURL(this.evidenceRef.current!.files![0]),
      };
      this.props.onSubmit(formData);
      this.resetForm();
    }
  };

  componentDidMount() {
    this.firstNameRef.current?.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.reportForm}>
        <label htmlFor="firstName">
          <span>First name:</span>
          <input id="firstName" type="text" name="firstName" ref={this.firstNameRef} />
        </label>
        {!this.state.isFirstNameValid && (
          <p className={s.errorMessage}>
            First name is required and should be at least 3 characters long and the first letter
            should be in upper case
          </p>
        )}
        <hr />

        <label htmlFor="lastName">
          <span>Last name:</span>
          <input id="lastName" type="text" name="lastName" ref={this.lastNameRef} />
        </label>
        {!this.state.isLastNameValid && (
          <p className={s.errorMessage}>
            Last name is required and should be at least 3 characters long and the first letter
            should be in upper case
          </p>
        )}
        <hr />

        <label htmlFor="accidentDate">
          <span>Happened at:</span>
          <input id="accidentDate" type="date" name="accidentDate" ref={this.accidentDateRef} />
        </label>
        {!this.state.isDateValid && (
          <p className={s.errorMessage}>
            The accident date is required and couldn&apos;t have happened in the future
          </p>
        )}
        <hr />

        <label htmlFor="location">
          {' '}
          <span>Accident location:</span>
          <select name="location" id="location" ref={this.locationRef}>
            <option value="">Choose location</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
          </select>
        </label>
        {!this.state.isLocationValid && (
          <p className={s.errorMessage}>Please, choose the accident location</p>
        )}
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
          />
        </label>
        {!this.state.isInjuriesValid && (
          <p className={s.errorMessage}>Please, choose one of the options</p>
        )}
        <hr />

        <label htmlFor="evidence">
          <span>Provide evidence:</span>
          <input type="file" name="evidence" ref={this.evidenceRef} accept="image/*" />
        </label>
        {!this.state.isFileValid && (
          <p className={s.errorMessage}>
            We only support files with jpeg, jpg, png, svg, gif, webp extensions
          </p>
        )}

        <button type="submit" className={s.submitButton}>
          Submit
        </button>
      </form>
    );
  }
}
