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

  @media (max-width: 610px) {
    max-width: 100px;
    font-size: 24px;
  }

  @media (max-width: 375px) {
    max-width: 80px;
    font-size: 16px;
  }

  ${({ error }) => error && css`
    border: 1px solid hsl(0, 100%, 67%);
  `}
`;
