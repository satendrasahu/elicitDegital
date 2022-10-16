import React from "react";
import styled from "styled-components";

const CustomText = styled.p`
  font-size: ${(props) => props.font_size};
  font-weight: ${(props) => props.font_weight};
  font-style: ${(props) => props.font_style};
`;

const Text = ({ children,fontSize,fontWeight,fontStyle }) => {
  return (
    <CustomText
      font_size={fontSize}
      font_weight={fontWeight}
      font_style={fontStyle}
    >
      {children}
    </CustomText>
  );
};

export default Text;
