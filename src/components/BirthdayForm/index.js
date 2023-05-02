import FormGroup from '../FormGroup';
import { Container, FormGroupContainer } from './styles';

import Input from '../Input';

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

    </Container>
  );
}
