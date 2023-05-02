import GlobalStyles from '../../assets/styles/global';

import BirthdayForm from '../BirthdayForm';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <BirthdayForm />
      </Container>
    </>
  );
}

export default App;
