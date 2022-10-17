import React, { useEffect, useState } from "react";
import { Button, Text } from "../../components";
import { Form } from "../../containers";
import { buttonType, color } from "../../utils";
import { Container, MainContainer } from "./userStyled";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../navigator/routes";
import {
  changeUser,
  saveUser,
  showSingleUser,
} from "../../services";
import swal from "sweetalert";

const ModifyUserPage = () => {
  const [userDetail, setUserDetail] = useState({
    name: undefined,
    mobile: undefined,
    address: undefined,
  });

  const navigate = useNavigate();
  const goPage = () => navigate(-1);
  const { modify, id } = useParams();
  document.title = modify + " " + routes?.modifyUser?.title;

  const modifyUser = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const inputFiels = [
    {
      name: "name",
      label: "User Name",
      placeHolder: "Enter Name ...",
      value: userDetail.name,
      type: "text",
      modifyUser: (e) => modifyUser(e),
    },
    {
      name: "mobile",
      label: "mobile",
      placeHolder: "Enter Mobile No...",
      value: userDetail.mobile,
      type: "Number",
      modifyUser: (e) => modifyUser(e),
    },
    {
      name: "address",
      label: "address",
      placeHolder: "Enter Address ...",
      value: userDetail.address,
      type: "text",
      modifyUser: (e) => modifyUser(e),
    },
  ];
  const findSingleUser = async () => {
    const result = await showSingleUser(id);
    result.success && setUserDetail(...result.data)
  };
  const addUser = async () => {
    if (userDetail?.name === undefined) {
      swal("name is required");
      return;
    }
    const result = await saveUser(userDetail);
    if (result.success) {
      setUserDetail({
        name: undefined,
        mobile: undefined,
        address: undefined,
      });
      swal("User Added Successfully", {
        buttons: ["Add More", "Go Back"],
      }).then((data) => data && goPage());
    }
  };
  const updateUser = async () => {
    if (userDetail?.name === "" || userDetail?.name === undefined) {
      swal("name is required");
      return;
    }
    const result = await changeUser(id, userDetail);
    result.success &&
      swal("User Updated Successfully", {
        buttons: ["update Again", "Go Back"],
      }).then((data) => data && goPage());
  };

  useEffect(()=>{findSingleUser()},[id])
  return (
    <>
      <Button margin="50px 0px 0px 50px" onClick={goPage}>
        <FiArrowLeft />
      </Button>
      <MainContainer>
        <Container>
          <Text fontSize={20} fontWeight={600}>
            {modify === "add" ? "Add" : "Update"} User
          </Text>
          <Form userDetail={userDetail} fields={inputFiels} />
          <Button
            type={buttonType.Primary}
            color={color.White}
            margin="10px 0px 0px 0px"
            onClick={modify === "add" ? addUser : updateUser}
          >
            {modify === "add" ? "Add" : "Update"} User
          </Button>
        </Container>
      </MainContainer>
    </>
  );
};

export default ModifyUserPage;
