const db = require("../models/index");

const getAllUsers = async () => {
  try {
    let users = await db.User.findAll();
    return users;
  } catch (err) {
    throw { status: 500, message: err.message || "Failed to get users" };
  }
};

const getUser = async (id) => {
  try {
    let users = await db.User.findByPk(id);
    return users;
  } catch (err) {
    throw { status: 500, message: err.message || "Failed to get user" };
  }
};

const createUser = async (name, email, password) => {
  try {
    if (name == undefined || email == undefined || password == undefined) {
      throw new Error("The arguments must not be null");
    }
    let newUser = await db.User.create({
      name,
      email,
      password,
    });
    return newUser;
  } catch (err) {
    throw { status: 500, message: err.message || "User could not be created" };
  }
};

const updateUser = async (id, name, email, password) => {
  try {
    let updateUser = await db.User.update(
      {
        name,
        email,
        password,
      },
      {
        where: {
          id,
        },
      }
    );
    return updateUser;
  } catch (err) {
    throw { status: 500, message: err.message || "User could not be updated" };
  }
};

const deleteUser = async (id) => {
  try {
    const deleteUser = await db.User.destroy({
      where: {
        id,
      },
    });
    return deleteUser;
  } catch (err) {
    throw { status: 500, message: err.message || "User could not be deleted" };
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
