const { Router } = require('express')
const controllers = require('../controllers/posts-action')

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
// router.delete('/products/:id', controllers.deleteProduct)

module.exports = router