import React, { useEffect, useState } from 'react';
import FormCard from 'components/FormCard/FormCard';
import Popup from 'components/Popup/Popup';
import ReportForm from 'components/ReportForm/ReportForm';
import s from './FormsPage.module.css';
import { SubmitHandler } from 'react-hook-form';
import { FormDataWithId } from 'components/ReportForm/ReportForm.schema';

const FormsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>();
  const [reports, setReports] = useState<FormDataWithId[]>([]);

  const onSubmit: SubmitHandler<FormDataWithId> = (formData) => {
    setReports((prev) => [...prev, formData]);
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      if (isPopupOpen) {
        setIsPopupOpen(false);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [isPopupOpen]);

  return (
    <div>
      <ReportForm onSubmit={onSubmit} />
      {isPopupOpen && (
        <Popup
          text="Your report has been successfully submitted"
          onClick={() => setIsPopupOpen(false)}
        />
      )}
      <section className={s.cardsWrapper}>
        {reports.map((report) => {
          const { id, ...props } = report;
          return <FormCard key={id} {...props} />;
        })}
      </section>
    </div>
  );
};

export default FormsPage;
