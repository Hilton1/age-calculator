import FormGroup from '../FormGroup';
import { ButtonContainer, Form, FormGroupContainer } from './styles';

import Input from '../Input';

import arrow from '../../assets/images/icon-arrow.svg';

export default function BirthdayForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroupContainer>
        <FormGroup>
          <p>DAY</p>
          <Input placeholder="DD" />
        </FormGroup>

        <FormGroup>
          <p>MONTH</p>
          <Input placeholder="MM" />
        </FormGroup>

        <FormGroup>
          <p>YEAR</p>
          <Input placeholder="YYYY" />
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
