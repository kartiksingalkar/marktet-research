const express = require('express')
const { newsLetterController } = require('../controller/newsletterController')
const router = express.Router()

// router.get('/form', (req,res) => {
//     res.json({msg: 'Get request'})
// })
router.post('/newsletter', newsLetterController)


module.exports = router
