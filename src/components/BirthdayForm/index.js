import { useState } from 'react';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form, FormGroupContainer } from './styles';

import Input from '../Input';

import arrow from '../../assets/images/icon-arrow.svg';
import formatDay from '../../utils/formatDay';
import formatMonth from '../../utils/formatMonth';
import formatYear from '../../utils/formatYear';

export default function BirthdayForm() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  function handleDayChange(event) {
    return setDay(formatDay(event.target.value));
  }

  function handleMonthChange(event) {
    return setMonth(formatMonth(event.target.value));
  }

  function handleYearChange(event) {
    return setYear(formatYear(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      day, month, year,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupContainer>
        <FormGroup>
          <p>DAY</p>
          <Input
            value={day}
            onChange={handleDayChange}
            placeholder="DD"
            required
          />
        </FormGroup>

        <FormGroup>
          <p>MONTH</p>
          <Input
            value={month}
            onChange={handleMonthChange}
            placeholder="MM"
            required
          />
        </FormGroup>

        <FormGroup
          error="Thils field is required"
        >
          <p>YEAR</p>
          <Input
            value={year}
            onChange={handleYearChange}
            placeholder="YYYY"
            error
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
