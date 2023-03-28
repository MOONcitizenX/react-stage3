import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './ReportForm.module.css';
import { FormData, FormDataWithId, schema } from './ReportForm.schema';
import { v4 as uuidv4 } from 'uuid';

interface ReportFormProps {
  onSubmit: SubmitHandler<FormDataWithId>;
}

const ReportForm = ({ onSubmit }: ReportFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataWithId>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const formOnSubmit = (data: FormData) => {
    const newData = {
      ...data,
      id: uuidv4(),
      evidence: data.evidence && data.evidence[0] ? URL.createObjectURL(data.evidence[0]) : '',
    };
    onSubmit(newData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formOnSubmit)} className={s.reportForm} aria-label="form">
      <label htmlFor="firstName">
        <span>First name:</span>
        <input
          {...register('firstName')}
          id="firstName"
          type="text"
          name="firstName"
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
      </label>
      {errors.firstName && <p className={s.errorMessage}>{errors.firstName.message}</p>}
      <hr />

      <label htmlFor="lastName">
        <span>Last name:</span>
        <input
          {...register('lastName')}
          id="lastName"
          type="text"
          name="lastName"
          aria-invalid={errors.lastName ? 'true' : 'false'}
        />
      </label>
      {errors.lastName && <p className={s.errorMessage}>{errors.lastName.message}</p>}
      <hr />

      <label htmlFor="accidentDate">
        <span>Happened at:</span>
        <input
          {...register('accidentDate')}
          id="accidentDate"
          type="date"
          name="accidentDate"
          aria-invalid={errors.accidentDate ? 'true' : 'false'}
        />
      </label>
      {errors.accidentDate && <p className={s.errorMessage}>{errors.accidentDate.message}</p>}
      <hr />

      <label htmlFor="location">
        {' '}
        <span>Accident location:</span>
        <select
          {...register('location')}
          name="location"
          id="location"
          aria-invalid={errors.location ? 'true' : 'false'}
        >
          <option value="">Choose location</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
        </select>
      </label>
      {errors.location && <p className={s.errorMessage}>{errors.location.message}</p>}
      <hr />

      <label htmlFor="isAlienContact">
        <span>Alien contact:</span>
        <input {...register('isAlienContact')} type="checkbox" name="isAlienContact" />
      </label>
      <hr />

      <p>Human injuries: </p>
      <label htmlFor="humanInjuriesYes">
        <span>Yes</span>
        <input
          {...register('humanInjuries')}
          id="humanInjuriesYes"
          type="radio"
          name="humanInjuries"
          value="Yes"
        />
      </label>
      <label htmlFor="humanInjuriesNo">
        <span>No</span>
        <input
          {...register('humanInjuries')}
          id="humanInjuriesNo"
          type="radio"
          name="humanInjuries"
          value="No"
        />
      </label>
      {errors.humanInjuries && <p className={s.errorMessage}>{errors.humanInjuries?.message}</p>}
      <hr />

      <label htmlFor="evidence">
        <span>Provide evidence:</span>
        <input
          {...register('evidence')}
          type="file"
          name="evidence"
          accept="image/*"
          data-testid="file-input"
        />
      </label>

      <button type="submit" className={s.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ReportForm;
