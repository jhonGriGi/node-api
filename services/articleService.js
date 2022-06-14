const db = require("../models");

const getAllArticles = async () => {
  try {
    let articles = await db.Article.findAll({
      // con esta permitimos mostrar los articulos con la informacion del usuario
      include: {
        model: db.User,
        require: true,
        as: "User",
        attributes: ["id", "name", "email"],
      },
    });
    return articles;
  } catch (err) {
    return err.message || "Failed to get Article";
  }
};

const getArticle = async (id) => {
  try {
    let article = await db.Article.findByPk(id);
    return article;
  } catch (err) {
    return err.message || "Failed to get Article";
  }
};

const createArticle = async (title, content, userId) => {
  try {
    let newArticle = await db.Article.create({
      title,
      content,
      userId,
    });
    return newArticle;
  } catch (err) {
    return err.message || "Article could not be created";
  }
};

const updateArticle = async (id, title, content, userId) => {
  try {
    let updateArticle = await db.Article.update(
      {
        title,
        content,
        userId,
      },
      {
        where: {
          id,
        },
      }
    );
    return updateArticle;
  } catch (err) {
    return err.message || "Article could not be created";
  }
};

const deleteArticle = async (id) => {
  try {
    const deleteArticle = await db.Article.destroy({
      where: {
        id,
      },
    });
    return deleteArticle;
  } catch (err) {
    return err.message || "Article could not be deleted";
  }
};

module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
