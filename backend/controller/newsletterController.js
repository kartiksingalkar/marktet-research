const { checkEmpty, checkEmail } = require("../utils/validations.js");
const { insert_data, read_data } = require("../modals/queries.js")
const { con } = require("../utils/db.js")
const validator = require('validator')




const newsLetterController = async (req, res) => {
    console.log("Body = ", req.body);
    const { newsletter } = req.body;
    const email = req.body;
    console.log("email is = ", email.data)
    try {
        checkEmpty(email.data, "Email")
        checkEmail(email.data);
        const insert = con.query('insert into newsletter values (?,?) ', [[email.id], [email.data]], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                // res.send("POSTED")
                console.log("inserted")
            }

        })


        if (!insert)
            throw Error("Something went wrong")
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json({ msg: "data inserted successfully" });


    } catch (error) {
        console.log("inside catch")
        res.status(400).json({ error: error.message });
    }



};

module.exports = { newsLetterController };
