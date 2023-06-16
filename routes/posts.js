import express from 'express';
import {getPosts, createPosts, updatePost, deletePost, likePost} from '../controllers/posts.js'

const router = express.Router()

//localhost:5000/posts
router.get('/', getPosts)
router.get('/', createPosts)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost);

export default router