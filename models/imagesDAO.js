const bd =require('../configMysql')

module.exports = {

    findByOriginalName : (username, callback) => {
        let sql = 'SELECT * FROM images WHERE originalname=?'
        bd.query(sql,username, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    insertImagen : (image, callback) => {
        let sql = 'INSERT INTO images SET ?'
        bd.query(sql,image, (err, data) => {
            if (err)
                return callback(null)
            else
                return  callback(data)
        })
    },
    deleteImagen: (originalname, callback) => {
        let sql = 'DELETE FROM images WHERE originalname = ?'
        bd.query(sql,originalname, (err, data) => {
            try {
                if (err) throw new Err('Error en la eliminación de la imagen')
                return callback(data)
            }
            catch (Err) {
                return callback(null)
            }
        })
    }
}