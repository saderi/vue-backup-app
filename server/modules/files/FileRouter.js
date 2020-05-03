const FileController = require('./FileController')
const router = require('express').Router()

router.get('/', FileController.get_all) 
router.post('/upload', FileController.upload) 
router.get('/file-count', FileController.file_count) 

module.exports = router