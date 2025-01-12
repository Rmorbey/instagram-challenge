const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
router.post("/new_comment", PostsController.NewComment)
router.post("/create_comment", PostsController.CreateComment)

module.exports = router;
