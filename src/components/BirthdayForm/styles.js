import styled from 'styled-components';

export const Form = styled.form``;

export const FormGroupContainer = styled.div`
display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  .line {
    height: 2px;
    width: 100%;
    background-color: hsl(0, 0%, 86%);
  }

  button {
    border: none;
    background: none;

    img {
      padding: 24px;
      width: 88px;
      border-radius: 100%;
      background: hsl(259, 100%, 65%);

      transition: all 200ms ease-in;

      :hover {
        background: hsl(0, 0%, 8%);
      }
    }
  }

  @media (max-width: 425px) {
    position: relative;
    margin: 50px 0;

    button {
      position: absolute;
      left: 45%;

      img {
        width: 60px;
        padding: 16px;
      }
    }
  }
`;
