import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;

export const Date = styled.div`
  display: flex;
  margin: 0;


  i {
    font-size: 80px;
    font-weight: 800;
  }

  .date {
    margin-right: 16px;
    color: hsl(259, 100%, 65%);
  }

  @media (max-width: 610px) {
    i {
      font-size: 64px;
    }

    .date {
      margin-right: 8px;
    }
  }

  @media (max-width: 425px) {
    i {
      font-size: 48px;
    }
  }
`;
