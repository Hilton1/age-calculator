import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;

  margin: 76px auto;
  padding: 64px;

  border-radius: 24px 24px 72px 24px;

  background: hsl(0, 0%, 100%);
`;

export const DateContainer = styled.div`
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
    margin-right: 4px;
    color: hsl(259, 100%, 65%);
  }
`;
