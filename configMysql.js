const mysql = require('mysql')

const config = {
    host: 'localhost',
    user: 'programacion_Act',
    database: 'proyecto_concurrente',
    password: 'kPLeZo%N4xbN8y&Z!x1x'
}
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión a la base de datos exitosa!');
});

module.exports = conn;
