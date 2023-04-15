import React from 'react'
import $ from 'jquery'

const Validations = () => {

    var Name = document.getElementById('name')
    var Email = document.getElementById('email')
    var Mobile = document.getElementById('mobile')
    var JobTitle = document.getElementById('job_title')
    var CompayName = document.getElementById('company_name')

    // Email Validation
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    const validate = () => {
        const result = $(Email);
        const email = $(Email).val();
        result.text('');
        if (validateEmail(email)) {
            //   $result.text(email + ' is valid :)');
            result.css('border', '1px solid black');
        } else {
            //   $result.text(email + ' is not valid :(');
            result.css('border', '1px solid red');
        }
        return false;
    }
    $(Email).on('input', validate);



    // Name Validation
    const nameValidate = () => {
        var hasNumber = /[\d,\-/\\{}<>()[\]!@#$%^&_+=*|:;"'`~?]/;
        const result = $(Name);
        const name = $(Name).val();
        if (hasNumber.test(name) || name.length === 0) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(Name).on('input', nameValidate);

    // Contact Validation
    const numberValidation = () => {
        var number = /\D/;
        const result = $(Mobile);
        const contact = $(Mobile).val();
        if (number.test(contact) || contact.length !== 10) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(Mobile).on('input', numberValidation);

    

    // Job Title
    const JobTitleValidation = () => {
        var hasNumber = /[\d,\-/\\{}<>()[\]!@#$%^&_+=*|:;"'`~?]/;
        const result = $();
        const job_title = $(JobTitle).val()
        if (hasNumber.test(job_title) || job_title.length === 0) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(JobTitle).on('input', JobTitleValidation);

    // Company Name
    const companyNameValidation = () => {
        var hasNumber = /[\d,\-/\\{}<>()[\]!@#$%^&_+=*|:;"'`~?]/;
        const result = $(CompayName);
        const company_name = $(CompayName).val();
        if (hasNumber.test(company_name) || company_name.length === 0) {
            result.css('border', '1px solid red');
        } else {
            result.css('border', '1px solid black');
        }
    }
    $(CompayName).on('input', companyNameValidation);

    
    return (
        <></>
    )

}

export default Validations