// Enlazamos nuestro servicio
const ArticleService = require("../services/articleService");

const getAllArticles = async (req, res) => {
  try {
    const allArticles = await ArticleService.getAllArticles();
    if (!allArticles) {
      throw new Error("There are not articles in database");
    }
    res.status(200).send({ status: "OK", data: allArticles });
  } catch (err) {
    res
      .status(err.status || 400)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const getArticle = async (req, res) => {
  let id = req.params.id;
  try {
    const article = await ArticleService.getArticle(id);
    res.status(200).send({ status: "OK", data: article });
  } catch (err) {
    res
      .status(err.status || 400)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const createArticle = async (req, res) => {
  const { title, content, UserId } = req.body;
  try {
    if (title == undefined || content == undefined || UserId == undefined) {
      throw new Error("The arguments must no be null");
    }
    const createArticle = await ArticleService.createArticle(
      title,
      content,
      UserId
    );
    res.status(200).send({ status: "OK", data: createArticle });
  } catch (err) {
    res
      .status(err.status || 400)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const updateArticle = async (req, res) => {
  let id = req.params.id;
  let { title, content, UserId } = req.body;
  try {
    const updateArticle = await ArticleService.updateArticle(
      id,
      title,
      content,
      UserId
    );
    res.status(200).send({ status: "OK", data: updateArticle });
  } catch (err) {
    res
      .status(err.status || 400)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

const deleteArticle = async (req, res) => {
  let id = req.params.id;
  try {
    const deleteArticle = await ArticleService.deleteArticle(id);
    res.status(200).send({ status: "OK", data: deleteArticle });
  } catch (err) {
    res
      .status(err.status || 400)
      .send({ status: "FAILED", data: { error: err.message } });
  }
};

module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
