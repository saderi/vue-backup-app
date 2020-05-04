const FileModel = require('./FileModel')

exports.get_all = (req, res) =>  {
    res.send('files')
}

exports.upload = (req, res) => {
    // res.send('test');
    const title = req.headers.title
    const fileUrl = req.file.filename
    const fileType = req.file.originalname.split('.')[1]
    
    const newFile = new FileModel({
        title, fileUrl, fileType
    })
    console.log(newFile);
    newFile.save()
    .then(response => {
        res.status(200).json({
            message: 'Files uploaded successfully',
            id: response._id,
            response
        })
    })
    .catch(error => {
        res.status(400).json({
            message: 'error',
            error: error,
            mongoose: error.errmsg
        })
    })
}

exports.file_count = (req, res) => {
    res.send('get file count')
}