import ReportForm from 'components/ReportForm/ReportForm';
import React, { Component } from 'react';
import s from './FormsPage.module.css';

export interface FormFields {
  firstName: string;
  lastName: string;
}

interface FormsPageState {
  reports: FormFields[];
}

export default class FormsPage extends Component<unknown, FormsPageState> {
  state: FormsPageState = {
    reports: [],
  };

  onSubmit = (formFields: FormFields) => {
    const newCard = formFields;
    this.setState((prev) => ({ reports: [...prev.reports, newCard] }));
  };
  render() {
    return (
      <div>
        <ReportForm onSubmit={this.onSubmit} />
        <section>
          {this.state.reports.map((report) => (
            <div key={report.firstName}>{report.firstName}</div>
          ))}
        </section>
      </div>
    );
  }
}
