import { useState } from 'react';
import GlobalStyles from '../../assets/styles/global';

import BirthdayForm from '../BirthdayForm';
import ResultAge from '../ResultAge';

import { Container } from './styles';

function App() {
  const [years, setYears] = useState('- -');
  const [months, setMonths] = useState('- -');
  const [days, setDays] = useState('- -');

  function handleCalculateAge(birthDate) {
    const today = new window.Date();
    const birth = new window.Date(birthDate);
    const diffTime = today.getTime() - birth.getTime();
    const diffAge = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    birth.setFullYear(birth.getFullYear() + diffAge);

    const diffMonths = Math.floor(
      (today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 30.44),
    );

    birth.setMonth(birth.getMonth() + diffMonths);
    const diffDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

    setYears(diffAge);
    setMonths(diffMonths);
    setDays(diffDays);
  }

  return (
    <>
      <GlobalStyles />

      <Container>
        <BirthdayForm
          onCalculateAge={handleCalculateAge}
        />

        <ResultAge
          years={years.toString()}
          months={months.toString()}
          days={days.toString()}
        />
      </Container>
    </>
  );
}

export default App;
