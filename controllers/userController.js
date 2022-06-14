const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).send({ status: "OK", data: allUsers });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const getUser = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await userService.getUser(id);
    res.status(200).send({ status: "OK", data: user });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name == undefined || email == undefined || password == undefined) {
      throw new Error("The arguments must not be null");
    }
    const createUser = await userService.createUser(name, email, password);
    res.status(200).send({ status: "OK", data: createUser });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let { name, email, password } = req.body;
  try {
    const updateUser = await userService.updateUser(id, name, email, password);
    res.status(200).send({ status: "OK", data: updateUser });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  try {
    const deleteUser = await userService.deleteUser(id);
    res.status(200).send({ status: "OK", data: deleteUser });
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
