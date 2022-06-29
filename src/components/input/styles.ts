import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ededed;
  box-shadow: 0rem 4rem 8rem rgba(28, 37, 44, 0.25);
  border-radius: 1px solid #767676;
  border-radius: 35px;
  width: 100%;
  margin-bottom: 1.6rem;

  svg {
    margin-right: 1.6rem;
  }

  input {
    display: flex;
    flex: 1;
    align-items: center;

    border: none;
    height: 4.8rem;
    font-size: 1.6rem;
    background-color: transparent;
    margin-left: 1rem;
    outline: 0;
    padding-left: 1rem;

    & ::placeholder {
      color: #aea8b2;
    }
  }
`;
