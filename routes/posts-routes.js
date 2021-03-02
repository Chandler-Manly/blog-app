const { Router } = require('express')
const controllers = require('../controllers/posts-action')

const router = Router()

router.get('/posts', controllers.getPosts)
// router.get('/products/:id', controllers.getProduct)
// router.post('/products', controllers.createProduct)
// router.put('/products/:id', controllers.updateProduct)
// router.delete('/products/:id', controllers.deleteProduct)

module.exports = router