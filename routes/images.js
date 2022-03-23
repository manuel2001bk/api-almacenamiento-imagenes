var express = require('express');
const multer = require("multer");
const path = require("path");
var router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../storage/img'))
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({storage})

router.post('/upload', upload.array('files',50), (req, res) => {
    console.log(req.files)

    res.send({ data: 'imagen cargada'})
})

module.exports = router;