const express = require('express')
const { uploadImage, downloadImage } = require('../controller/image-controller')
const router = express.Router()
const upload = require('../utils/upload')

router.post('/upload', upload.single('file'), uploadImage)
router.get('/file/:fileId', downloadImage)

module.exports = router
