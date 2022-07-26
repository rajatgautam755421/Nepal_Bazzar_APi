const router = require("express").Router();
const {
  createPost,
  getAllPost,
  getAPost,
  findPostByUserId,
  deletePostById,
  findByRegex,
} = require("../Controllers/post");
const { verify } = require("../Middlewares/VerifyUser");

router.post("/post", verify, createPost);
router.get("/posts/all", getAllPost);
router.get("/post/one/:id", getAPost);
router.get("/post/oneuser/:id", findPostByUserId);
router.get("/find/regex/:search", findByRegex);

router.delete("/post/delete/:id", deletePostById);

module.exports = router;
