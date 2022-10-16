import { User } from "../models/index.js";

const response = {
  success: true,
  message: undefined,
  data: [],
  status: 200,
  error: false,
};

const findUser = async (_, res) => {
  try {
    const result = await User.find();
    result && res.send({ ...response, data: result });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

const findSingleUser = async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    result
      ? res.send({ ...response, data: [result] })
      : res.send({ ...response, message: "Not Found" });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

const addUser = async (req, res) => {
  try {
    const userLength = await (await User.find()).length;
    const saveUser = new User({ ...req.body, id: userLength + 1 });
    const result = await saveUser.save();
    result && res.send({ ...response, data: result, message: "created" });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(
      { _id: req.params.id },
      { new: true }
    );
    result
      ? res.send({ ...response, data: result, message: "deleted" })
      : res.send({ ...response, message: "invalid Id, or already deleted " });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

const deleteAllUser = async (req, res) => {
  try {
    const result = await User.deleteMany();
    result
      ? res.send({ ...response, data: result, message: "deleted all" })
      : res.send({ ...response, message: " already deleted " });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req?.body,
      { new: true }
    );
    result
      ? res.send({ ...response, data: result, message: "updated" })
      : res.send({ ...response, message: "invalid id / not updated" });
  } catch (e) {
    res.send({ ...response, success: false, error: e.message });
  }
};

export {
  findUser,
  findSingleUser,
  addUser,
  deleteUser,
  deleteAllUser,
  updateUser,
};
