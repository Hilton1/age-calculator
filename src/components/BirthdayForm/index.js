import FormGroup from '../FormGroup';
import { ButtonContainer, Container, FormGroupContainer } from './styles';

import Input from '../Input';

import arrow from '../../assets/images/icon-arrow.svg';

export default function BirthdayForm() {
  return (
    <Container>
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

        <button type="button">
          <img src={arrow} alt="arrow" />
        </button>
      </ButtonContainer>

    </Container>
  );
}
