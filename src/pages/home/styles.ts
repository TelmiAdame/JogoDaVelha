import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 3.2rem 0;

  img {
    width: 27.5rem;
    height: 24rem;
    margin-bottom: 3.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 50rem;
    padding: 3.6rem;

    background-color: #ebeaea;
    border-radius: 4.5rem;

    small {
      margin-top: auto;
      font-size: 1.6rem;

      code {
        color: #9b0606;
        font-weight: bold;
      }
    }
  }
`;
