const express = require('express');
const multer = require("multer");
const path = require("path");
const router = express.Router();

const imageServices = require('../controllers/imageService')

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
    console.log("Entro")
    let aux = req.files
    console.log(aux)
    for (const x in req.files) {
        imageServices.signUpImage(req.files[x],(data)=>{
            console.log(data)
        })
    }
    res.send({ data: 'Imagenes cargadas'})
})

module.exports = router;