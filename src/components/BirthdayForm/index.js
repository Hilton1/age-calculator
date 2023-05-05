import PropTypes from 'prop-types';

import { useState } from 'react';

import { ButtonContainer, Form, FormGroupContainer } from './styles';

import Input from '../Input';
import FormGroup from '../FormGroup';

import arrow from '../../assets/images/icon-arrow.svg';

import formatDay from '../../utils/formatDay';
import formatMonth from '../../utils/formatMonth';
import formatYear from '../../utils/formatYear';

import useErrors from '../../hooks/useErrors';

export default function BirthdayForm({ onCalculateAge }) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const {
    setError,
    removeError,
    getErrorMessageByFieldname,
  } = useErrors();

  function validateDay() {
    if (!day) {
      setError({ field: 'day', message: 'This field is required' });
      return true;
    } if (day > 31 || day < 1) {
      setError({ field: 'day', message: 'Must be a valid day' });
      return true;
    }
    removeError('day');
    return false;
  }

  function validateMonth() {
    if (!month) {
      setError({ field: 'month', message: 'This field is required' });
      return true;
    } if (month > 12 || month < 1) {
      setError({ field: 'month', message: 'Must be a valid month' });
      return true;
    }
    removeError('month');
    return false;
  }

  function validateYear() {
    const currentYear = new Date().getFullYear();

    if (!year) {
      setError({ field: 'year', message: 'This field is required' });
      return true;
    } if (year > currentYear || year < 1) {
      setError({ field: 'year', message: 'Must be a valid year' });
      return true;
    }
    removeError('year');
    return false;
  }

  function handleSubmit(event) {
    event.preventDefault();

    validateDay();
    validateMonth();
    validateYear();

    const errorExists = validateDay() || validateMonth() || validateYear();

    if (!errorExists) {
      onCalculateAge(`${year}-${month}-${day}`);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupContainer>
        <FormGroup
          error={getErrorMessageByFieldname('day')}
        >
          <p>DAY</p>
          <Input
            value={day}
            onChange={(event) => setDay(formatDay(event.target.value))}
            placeholder="DD"
            error={getErrorMessageByFieldname('day')}
          />
        </FormGroup>

        <FormGroup
          error={getErrorMessageByFieldname('month')}
        >
          <p>MONTH</p>
          <Input
            value={month}
            onChange={(event) => setMonth(formatMonth(event.target.value))}
            placeholder="MM"
            error={getErrorMessageByFieldname('month')}
          />
        </FormGroup>

        <FormGroup
          error={getErrorMessageByFieldname('year')}
        >
          <p>YEAR</p>
          <Input
            value={year}
            onChange={(event) => setYear(formatYear(event.target.value))}
            placeholder="YYYY"
            error={getErrorMessageByFieldname('year')}
          />
        </FormGroup>
      </FormGroupContainer>

      <ButtonContainer>
        <div className="line" />

        <button type="submit">
          <img src={arrow} alt="arrow" />
        </button>
      </ButtonContainer>

    </Form>
  );
}

BirthdayForm.propTypes = {
  onCalculateAge: PropTypes.func.isRequired,
};
