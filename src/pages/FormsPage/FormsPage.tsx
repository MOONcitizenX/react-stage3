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
    reports: [
      {
        id: '123',
        firstName: '123123123',
        lastName: '123123123',
        date: '123123123',
        location: '123123123',
        isAlienContact: true,
        humanInjuries: true,
        file: '',
      },
    ],
  };

  onSubmit = (formData: FormFields) => {
    this.setState((prev) => ({ reports: [...prev.reports, formData], isPopupOpen: true }));
    console.log(formData.file);
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
