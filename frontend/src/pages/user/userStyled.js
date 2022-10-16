import styled from "styled-components";
const MainContainer = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: ${(props) => props.margin};
`;
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - 100px);
  transform: translate(-50%, -50%);
  text-align: center;
`;
export { MainContainer, Container };
