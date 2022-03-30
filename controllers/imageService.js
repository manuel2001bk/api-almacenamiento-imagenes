const bcrypt = require("bcrypt");
const imagenDao = require("../models/imagesDAO");
const path = require("path")

const fs = require("fs-extra")
const signUpImage = (req, res) =>{
    const imagen = {
        originalname : req.originalname,
        mimetype : req.mimetype,
        filename : req.filename,
    }
    imagenDao.insertImagen(imagen,(data) => {
        if(data && data.affectedRows === 1){
            res.message = {
                status: true,
                message: 'Imagen agregada correctamente'
            }
        } else {
            res.messageerror = {
                status: false,
                message: 'Ha ocurrido un error al guardar la imagen'
            }
        }
    })
}

const getImagen = (req, res) => {
    let  infoImagen = ''
    imagenDao.findByOriginalName(req.params.name, data =>{
        try {
            if (!data) throw new Err("Usuario disponible")
            console.log(data)
            let pathImage = path.resolve(__dirname, `../storage/img/${data.filename}`)
            if( fs.exists(pathImage)){
                res.sendFile(pathImage)
            }else {
                res.send({
                    status: false,
                    message: 'Ha ocurrido un error al obtener la imagen'
                })
            }
        }
        catch(Err) {
            res.send({
                status: false, message: 'Imagen no disponible'
            })
        }
    })
    console.log()

}

module.exports = {
    signUpImage,
    getImagen,
}