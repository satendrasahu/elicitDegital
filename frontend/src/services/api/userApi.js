import axios from "axios";
const showUser = async () => {
  const result = await axios.get(`/user`);
  return result.data;
};

const removeUser = async (id) => {
  const result = await axios.delete(`user/remove/${id}`);
  return result.data;
};

const deleteAllUser = async () => {
  const result = await axios.delete(`user/removeall`);
  return result.data;
};

const saveUser = async (userDetail) => {
  const result = await axios.post(`/user/add`,userDetail);
  return result.data;
};

const changeUser = async (id, userDetail) => {
  const result = await axios.patch(`/user/update/${id}`, userDetail);
  return result.data;
};

const showSingleUser = async (id) => {
  const result = await axios.get(`/user/${id}`);
  return result.data;
};



export { showUser, removeUser,deleteAllUser, saveUser, changeUser,showSingleUser };
