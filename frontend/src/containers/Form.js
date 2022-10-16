import React from "react";
import styled from "styled-components";
import { Input } from "../components";

const Container = styled.div`
  text-align: center;
  width: 400px;

  @media screen and (max-width: 500px) {
    margin: auto 20px;
    width: calc(100vw - 40px);
  }
`;
const Form = (props) => {
  return (
    <Container>
      <Input {...props} />
    </Container>
  );
};

export default Form;
