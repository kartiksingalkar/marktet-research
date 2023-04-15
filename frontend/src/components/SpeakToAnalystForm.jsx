import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClientCaptcha from "react-client-captcha"
import "react-client-captcha/dist/index.css"


const SpeakToAnalystForm = () => {

  const formik = useFormik({
    validationSchema: Yup.object({
      full_name: Yup.string()
        .label("Full name ")
        .required()
        .min(2, "username must be at least 2 character"),
      business_email: Yup.string()
        .email("Business email is invalid")
        .required(),
      phone_number: Yup.number()
        .min(10, "Phone number at leat 10 digit")
        .required(),
      company: Yup.string()
        .required()
        .min(2, "Company Name must be at least 2 character"),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
      zip_code: Yup.string().required(),
      specific_request: Yup.string().required(),
      termsAndConditions: Yup.bool().oneOf(
        [true],
        "You need to accept the terms and conditions"
      ),
      captcha: Yup.string().max(6).min(6).required(),
    }),

    initialValues: {
      full_name: "",
      business_email: "",
      phone_number: "",
      company: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
      specific_request: "",
      termsAndConditions: false,
      captcha:"",
    },
    onSubmit: (values, action) => {
      console.log(values,action)
      handelData(values, action)  
      action.resetForm();
    },
  });

  // For captcha
  const [captchaCode, setCaptchaCode] = useState("")
  const [error, setError] = useState(true)

  const handelData = async (values, action) => {

    if (values.captcha === captchaCode) {
      const response = await fetch("", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const json = await response.json();
      if (response.ok) {
        toast.success(json.msg);
        action.resetForm();
      }
      if (!response.ok) {
        toast.error(json.error);
      }
    }
    else 
      toast.error("Invalid Captcha")

  }

  return (
    <>
      <div className="container bg-white">
        <div className="row p-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="col">
              {/* first row  */}
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control bg-light ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-danger"
                      : ""
                  }`}
                  name="full_name"
                  placeholder="Full Name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                />
                {/* {formik.errors.full_name && formik.touched.full_name && (
                <span className="text-danger">{formik.errors.full_name}</span>
              )} */}
              </div>

              {/* second row  */}
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control bg-light ${
                    formik.touched.business_email &&
                    formik.errors.business_email
                      ? "border border-danger"
                      : ""
                  }`}
                  placeholder="Business Email*"
                  name="business_email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.business_email}
                />
              </div>

              {/* third row  */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.phone_number &&
                        formik.errors.phone_number
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="Phone Number*"
                      name="phone_number"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.phone_number}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.company && formik.errors.company
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="Company*"
                      name="company"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.company}
                    />
                  </div>
                </div>
              </div>

              {/* forth row  */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.city && formik.errors.city
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="City*"
                      name="city"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.state && formik.errors.state
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="State*"
                      name="state"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.state}
                    />
                  </div>
                </div>
              </div>

              {/* fifth row  */}
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.country && formik.errors.country
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="Country*"
                      name="country"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.country}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control bg-light ${
                        formik.touched.zip_code && formik.errors.zip_code
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="Zip Code*"
                      name="zip_code"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.zip_code}
                    />
                  </div>
                </div>
              </div>

              {/* six row  */}
              <div className="row">
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control bg-light ${
                      formik.touched.specific_request &&
                      formik.errors.specific_request
                        ? "border border-danger"
                        : ""
                    }`}
                    placeholder="Any Specific Request"
                    name="specific_request"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.specific_request}
                  />
                </div>
              </div>

              {/* seven row  */}

              <div className="row">
                <div className="col-6">
                
                <div className="captcha-container">
                <ClientCaptcha captchaCode={setCaptchaCode} charsCount={6} width={200} />
                <input
                  type="text"
                  className={`form-control bg-light ${
                    formik.touched.captcha &&
                    formik.errors.captcha
                      ? "border border-danger"
                      : ""
                  }`}
                  name="captcha"
                  onChange={formik.handleChange}
                  value={formik.values.captcha}
                />
                {/* <button className="com-submit-btn" type="submit">
                  Submit
                </button> */}
                
                
                </div>

                <div className="col-6">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      // className="form-check-input"
                      className={`form-check-input ${
                        formik.touched.specific_request &&
                        formik.errors.specific_request
                        ? "border border-danger"
                        : ""
                      }`}
                      id="term_conditions"
                      name="termsAndConditions"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.termsAndConditions}
                      />
                    <label
                      className="form-check-label"
                      htmlFor="term_conditions"
                      >
                      I have read and agreed to the
                      <Link to="#"> Terms & Conditions</Link>
                    </label>
                  </div>
                </div>
              </div>

              {/* button part  */}
              <div className="d-flex justify-content-center">
                <button className="form_button" type="submit">
                  Submit
                </button>
              </div>
                      </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Flip}
      />
    </>
  );
};

export default SpeakToAnalystForm;
