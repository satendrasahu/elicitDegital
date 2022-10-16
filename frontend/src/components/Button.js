import React from "react";
import styled from "styled-components";
import { background } from "../utils";

const CustumeButton = styled.button`
  background-color: ${(props) => background[props.back_ground]};
  margin: ${(props) => props.margin || `0`};
  padding: ${(props) => props.padding || `10px`};
  color: ${(props) => props.color || "black"};
  border: none;
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius || '10px'};
`;

const Button = ({ children, type, margin, padding, color, onClick,borderRadius }) => {
  const buttonAction = () => onClick()
  return (
    <CustumeButton
      back_ground={type}
      margin={margin}
      padding={padding}
      borderRadius = {borderRadius}
      color={color}
      onClick={buttonAction}
    >
      {children}
    </CustumeButton>
  );
};

export default Button;
