const { Router } = require('express')
const controllers = require('../controllers/posts-action')

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
// router.post('/products', controllers.createProduct)
// router.put('/products/:id', controllers.updateProduct)
// router.delete('/products/:id', controllers.deleteProduct)

module.exports = router