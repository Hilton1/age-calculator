import PropTypes from 'prop-types';

import { Container, Date } from './styles';

export default function ResultAge({ years, months, days }) {
  return (
    <Container>
      <Date>
        <i className="date">{years} </i>
        <i>years</i>
      </Date>

      <Date>
        <i className="date">{months} </i>
        <i>months</i>
      </Date>

      <Date>
        <i className="date">{days} </i>
        <i>days</i>
      </Date>
    </Container>
  );
}

ResultAge.propTypes = {
  years: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
};
