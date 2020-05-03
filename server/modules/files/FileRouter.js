const FileController = require('./FileController')
const router = require('express').Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/files')
    },
    filename: (req, file, callback) => {
        const filename = file.originalname.split('.')[0]
        callback(null, filename + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.get('/', FileController.get_all) 
router.post('/upload', upload.single('file'), FileController.upload) 
router.get('/file-count', FileController.file_count) 

module.exports = router