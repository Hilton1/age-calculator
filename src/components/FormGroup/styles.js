import styled from 'styled-components';

export const Container = styled.div`
  p {
    text-transform: uppercase;
    color: hsl(0, 1%, 44%);
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 8px;
  }

  & + & {
    margin-left: 32px;
  }
`;
