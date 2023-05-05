import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;

  margin: 76px auto;
  padding: 64px;

  border-radius: 24px 24px 216px 24px;

  background: hsl(0, 0%, 100%);

  @media (max-width: 768px) {
    max-width: 600px;
    padding: 64px 32px;
  }

  @media (max-width: 610px) {
    max-width: 425px;
  }

  @media (max-width: 425px) {
    max-width: 375px;
  }
`;
