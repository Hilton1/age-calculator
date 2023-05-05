import styled, { css } from 'styled-components';

export const Container = styled.div`
  p {
    text-transform: uppercase;
    color: hsl(0, 1%, 44%);
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 8px;
    font-size: 12px;

  }

  i {
    color: hsl(0, 100%, 67%);
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  & + & {
    margin-left: 32px;
  }

  @media (max-width: 610px) {
    & + & {
    margin-left: 16px;
  }
  }

  ${({ error }) => error && css`
    p {
      color: hsl(0, 100%, 67%);
    }
  `}
`;
