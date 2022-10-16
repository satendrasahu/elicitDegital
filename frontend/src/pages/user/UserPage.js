import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { Button, Table, Text } from "../../components";
import { showUser } from "../../services/api";
import { deleteAllUser, removeUser } from "../../services/api/userApi";
import { buttonType, color } from "../../utils";
import { MainContainer } from "./userStyled";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { routes } from "../../navigator/routes";

const UserPage = () => {
  const [state, setState] = useState([]);

  const navigate = useNavigate();
  const addUser = () => navigate(`/user/add`);

  const displayUsers = async () => {
    const result = await showUser();
    result && setState(result.data);
  };

  const removeAllUser = async () => {
    swal({
      title: "Are you sure?",
      text: "Delete All User Permanantly ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deleteAllUser();
        result?.success && displayUsers();
        swal("User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("User is safe!");
      }
    });
  };

  const deleteUser = async (id) => {
    if (!id) return;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await removeUser(id);
        result?.success && displayUsers();
        swal("User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("User is safe!");
      }
    });
  };

  const updateUser = async (id) => {
    if (!id) return;
    navigate(`/user/update/${id}`);
  };
  const TableHead = ["id", "Name", "Mobile", "Address", "Actions"];
  const DeleteButton = ({ id }) => {
    return (
      <Button
        type={buttonType.Danger}
        color={color.White}
        margin="0px 5px"
        padding="5px"
        borderRadius="2px"
        onClick={() => deleteUser(id)}
      >
        <FiTrash />
      </Button>
    );
  };
  const UpdateButton = ({ id }) => {
    return (
      <Button
        type={buttonType.Warning}
        color={color.White}
        margin="0px 5px"
        padding="5px"
        borderRadius="2px"
        onClick={() => updateUser(id)}
      >
        <FiEdit2 />
      </Button>
    );
  };

  useEffect(() => {
    displayUsers();
    document.title = routes?.user?.title;
  }, []);

  return (
    <MainContainer>
      <Text fontSize="30px" fontWeight={500}>
        User List
      </Text>
      <Button
        type={buttonType.Primary}
        margin="0px 10px 10px 0px"
        color={color.White}
        onClick={addUser}
      >
        Add User
      </Button>
      <Button
        type={buttonType.Danger}
        color={color.White}
        onClick={removeAllUser}
        margin="0px 0px 30px 0px"
      >
        Remove All
      </Button>
      <Table
        TableHead={TableHead}
        TableData={state}
        Action={[DeleteButton, UpdateButton]}
      />
    </MainContainer>
  );
};
export default UserPage;
