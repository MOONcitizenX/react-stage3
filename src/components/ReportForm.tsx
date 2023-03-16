import { FormFields } from 'pages/FormsPage';
import React, { Component } from 'react';

interface ReportFormProps {
  onSubmit: (formFields: FormFields) => void;
}

type FormFieldNames = {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
};

export default class ReportForm extends Component<ReportFormProps> {
  constructor(props: ReportFormProps) {
    super(props);
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement & FormFieldNames> = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">
          <input type="text" name="firstName" />
        </label>
        <label htmlFor="lastName">
          <input type="text" name="lastName" />
        </label>
      </form>
    );
  }
}
