import React from "react";
import styled from "styled-components";
import Text from "./Text";
const Container = styled.div`
  text-align: left;
`;
const CustomInput = styled.input`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
`;
const CustomeLabel = styled.label``;

const Input = (props) => {
  const { fields } = props;
  return fields?.map((field, ind) => (
    <Container key={ind}>
      <CustomeLabel htmlFor={field?.label}>
        <Text fontSize={10} fontWeight={100}>
          {field?.label}
        </Text>
      </CustomeLabel>
      <CustomInput
        type={field?.type}
        placeholder={field?.placeHolder}
        value={field?.value}
        name={field?.name}
        onChange={field?.modifyUser}
      />
    </Container>
  ));
};

export default Input;
