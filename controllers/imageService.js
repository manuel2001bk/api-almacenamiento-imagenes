const bcrypt = require("bcrypt");
const imagenDao = require("../models/imagesDAO");

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

module.exports = {
    signUpImage,
}