import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border-radius: 3.5rem;
  border: 0.1rem solid #767676;
  width: 100%;
  margin-bottom: 1.6rem;
  box-shadow: 0 0.4rem 0.8rem rgba(28, 37, 44, 0.25rem);

  svg {
    margin-right: 1.6rem;
  }

  input {
    display: flex;
    flex: 1;
    align-items: center;
    border: none;
    height: 4.8rem;
    background-color: transparent;
    font-size: 1.6rem;
    margin-left: 1rem;
    outline: none;

    &::placeholder {
      color: #aea8b2;
    }
  }
`;
