const { con } = require("../utils/db.js")


// con.query(`INSERT INTO 'newsletter' (email) VALUES ('test@gmail.com')`, (err, result, fields) => {
//     if(err){
//         return console.log(err)
//     }
//     return console.log(result)
// })

const insert_data = (table, columns, data) => {
    var sql = `INSERT INTO ${table} (${columns}) VALUES ?`;
    var values = [[...data]]
    con.promise().query(sql, [values])
    return true
}

const read_data = async (get, table, condition, data, extra) => {
    let qry = `SELECT ${get} FROM ${table}`
    if (condition)
        qry += ` WHERE ${condition} = ?`
    if(extra)
        qry += extra
    const [d] = await con.query(qry, data);
    return (d)
}

// const delete_data = async (table, condition, data) => {
//     let qry = `DELETE FROM ${table}`
//     if (condition)
//         qry += ` WHERE ${condition} =?`
//     const deleted = await con.query(qry, data);
//     return (deleted);
// }

// const update_data = async(table, column, condition, data) => {
//     let qry = `UPDATE ${table} SET ${column} =? WHERE ${condition} =?`
//     const updated = await con.query(qry, data)
//     return (updated)
// }

module.exports = { insert_data, read_data}