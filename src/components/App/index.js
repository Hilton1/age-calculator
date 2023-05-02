import GlobalStyles from '../../assets/styles/global';

import BirthdayForm from '../BirthdayForm';
import { Container, DateContainer, Date } from './styles';

const data = '- -';

function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <BirthdayForm />

        <DateContainer>
          <Date>
            <i className="date">{data} </i>
            <i>years</i>
          </Date>

          <Date>
            <i className="date">{data} </i>
            <i>months</i>
          </Date>

          <Date>
            <i className="date">{data} </i>
            <i>days</i>
          </Date>
        </DateContainer>
      </Container>
    </>
  );
}

export default App;
