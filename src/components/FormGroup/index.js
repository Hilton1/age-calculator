// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Container
      error={error}
    >
      {children}
      {error && <i>{error}</i>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
