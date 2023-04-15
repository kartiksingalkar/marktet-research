const validator = require('validator')


const checkEmpty = (data, msg) => {
    if (validator.isEmpty(data, { ignore_whitespace: true }))
        throw Error(`${msg} field cannot be empty`)
}


const checkEmail = (data) => {
    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
    if (!email_regex.test(data))
        throw Error("Enter a valid email address")
}



module.exports = { checkEmpty, checkEmail }
