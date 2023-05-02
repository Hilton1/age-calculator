import styled, { css } from 'styled-components';

export default styled.input`
  width: 132px;

  border: 1px solid hsl(0, 0%, 86%);
  border-radius: 8px;
  outline: none;

  appearance: none;

  padding: 8px 16px;
  font-weight: bold;
  font-size: 32px;

  ${({ error }) => error && css`
    border: 1px solid hsl(0, 100%, 67%);
  `}
`;
