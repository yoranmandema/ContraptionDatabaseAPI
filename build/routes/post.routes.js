"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var post_controller_1 = require("../controllers/post.controller");
var router = express_1.Router();
router.route('/')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.createPost);
router.route('/:postId')
    .get(post_controller_1.getPost)
    .delete(post_controller_1.deletePost)
    .put(post_controller_1.updatePost);
exports.default = router;
