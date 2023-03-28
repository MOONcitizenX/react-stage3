import React, { Component } from 'react';
import FormCard from 'components/FormCard/FormCard';
import Popup from 'components/Popup/Popup';
import ReportForm from 'components/ReportForm/ReportForm';
import s from './FormsPage.module.css';

export interface FormFields {
  id: string;
  firstName: string;
  lastName: string;
  date: string;
  location: string;
  isAlienContact: boolean;
  humanInjuries: boolean;
  file: string;
}

interface FormsPageState {
  isPopupOpen: boolean;
  reports: FormFields[];
}

export default class FormsPage extends Component<unknown, FormsPageState> {
  state: FormsPageState = {
    isPopupOpen: false,
    reports: [],
  };

  onSubmit = (formData: FormFields) => {
    console.table(formData);

    this.setState((prev) => ({ reports: [...prev.reports, formData], isPopupOpen: true }));
  };

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.isPopupOpen) {
        this.setState({ isPopupOpen: false });
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        <ReportForm onSubmit={this.onSubmit} />
        {this.state.isPopupOpen && (
          <Popup
            text="Your report has been successfully submitted"
            onClick={() => this.setState({ isPopupOpen: false })}
          />
        )}
        <section className={s.cardsWrapper}>
          {this.state.reports.map((report) => {
            const { id, ...props } = report;
            return <FormCard key={id} {...props} />;
          })}
        </section>
      </div>
    );
  }
}
