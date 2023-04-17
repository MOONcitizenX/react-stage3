import React, { useEffect, useState } from 'react';
import FormCard from 'components/FormCard/FormCard';
import Popup from 'components/Popup/Popup';
import ReportForm from 'components/ReportForm/ReportForm';
import s from './FormsPage.module.css';
import { SubmitHandler } from 'react-hook-form';
import { FormDataWithId } from 'components/ReportForm/ReportForm.schema';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { addCard } from 'store/reportFormSlice';

const FormsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const { forms } = useAppSelector((state) => state.reportForms);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataWithId> = (formData) => {
    dispatch(addCard(formData));
    setIsPopupOpen(true);
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
        {forms.map((form) => {
          const { id, ...props } = form;
          return <FormCard key={id} {...props} />;
        })}
      </section>
    </div>
  );
};

export default FormsPage;
