const express = require('express')
const cors = require('cors')
const multer = require('multer')
const sharp = require('sharp')
const app = express()
app.use(cors())
const PORT = 3000

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({ data: 'imagen cargada'})
})

app.listen(PORT, () => {
    console.log('listo por el puerto ', PORT)
})