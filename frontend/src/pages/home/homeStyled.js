import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export { MainContainer,Container};
