import React from "react";
import { Button, Text } from "../../components";
import { buttonType, color } from "../../utils";
import { MainContainer, Container } from "./homeStyled";
import { useNavigate } from "react-router-dom";
import { routes } from "../../navigator";

const HomePage = () => {
  const navigate = useNavigate();
  const goPage = () => navigate(routes?.user?.path);
  document.title = routes?.home?.title;
  return (
    <MainContainer>
      <Container>
        <Text fontWeight={600} fontSize={"30px"}>
          Welcome to HomePage
        </Text>
        <Button type={buttonType.Primary} color={color.White} onClick={goPage}>
          {" "}
          Get Started
        </Button>
      </Container>
    </MainContainer>
  );
};

export default HomePage;
