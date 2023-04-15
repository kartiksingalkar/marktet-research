var mysql = require('mysql2');
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})




// var connection = con.getConnection((err) => {
//     if(err){
//         console.log("Error in db");
//     }else{
//         console.log('db connected successfully');
//     }
// })






module.exports = { con }