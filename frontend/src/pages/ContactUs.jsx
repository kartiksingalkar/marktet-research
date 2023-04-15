import React, { useState } from "react";
import "../styles/contactus.css";
import ContactInfoCommon from "../components/ContactInfoCommon";
import Validations from "../components/Validations";

import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {

  // Form validation using formik and yup

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
      job_title: Yup.string().required(),
      country: Yup.string().required(),
      specific_request: Yup.string().required(),
    }),

    initialValues: {
      full_name: "",
      business_email: "",
      phone_number: "",
      company: "",
      job_title: "",
      country: "",
      specific_request: "",
    },
    onSubmit: function (values, action) {
      // console.log(values);
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
    else {

      toast.error("Invalid Captcha")
    }

  }


  return (

    <>
      <Validations />
      <div className="contactus-container">
        <div className="contact-section-1">
          <p>
            Our Team would be happy to assist you with your queries. Fill in the
            form below and someone from our team will get in touch with you
            soon!
          </p>
        </div>
        <div className="contact-section-2">
          <div className="contact-cards-1">
            <div className="contact-cards-1-info">
              <h3>Corporate Headquarters</h3>
              <hr></hr>
              <p>Ellora Infotech Private Limited</p>
              <p>
                Unit 8 & 9, 4th EFC, Marisoft 1, Marigold Premises, Kalyani
                Nagar, Pune - 411014
              </p>
            </div>
            <ContactInfoCommon />
          </div>
          <div className="contact-cards-2">
            <div className="contact-cards-1-info">
              <h3>USA Headquarters</h3>
              <hr></hr>
              <p>Ellora Infotech Private Limited</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci nam odit.
              </p>
            </div>
            <ContactInfoCommon />
          </div>
          <div className="contact-cards-3">
            <div className="contact-cards-1-info">
              <h3>UK Headquarters</h3>
              <hr></hr>
              <p>Ellora Infotech Private Limited</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci nam odit.
              </p>
            </div>
            <ContactInfoCommon />
          </div>
          <div className="contact-sml-cards">
            <div className="sml-card-1">
              <h2>Recruiting Contact</h2>
              <p>
                <a href="mailto:career@elloramarketresearch.com">
                  <span className="span1">career@elloramarketresearch.com</span>
                </a>
              </p>
            </div>
            <div className="sml-card-2">
              <h2>Media Inquiry</h2>
              <p>
                <a href="mailto:media@elloramarketresearch.com">
                  <span className="span1">media@elloramarketresearch.com</span>
                </a>
              </p>
            </div>
            <div className="sml-card-3">
              <h2>Reseller Inquiry</h2>
              <p>
                <a href="mailto:reseller@elloramarketresearch.com">
                  <span className="span1">
                    reseller@elloramarketresearch.com
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="contact-section-3">
          <div className="section-3-left">
            <h3>Contact Research Representative</h3>
            <p>
              Please fill out the form to enable our research representatives to
              contact you at the earliest.
            </p>
            <div className="contact-section-3-form-info">
              <ContactInfoCommon />
            </div>
          </div>
          <div className="section-3-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="section-form-1">
                <input type="text"
                  className={`form-control bg-light ${
                    formik.touched.full_name && formik.errors.full_name
                      ? "border border-danger"
                      : ""
                  }`}
                  name="full_name"
                  id="full_name"
                  placeholder="Full Name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.full_name} />
                <input type="text"
                      className={`form-control bg-light ${
                        formik.touched.job_title && formik.errors.job_title
                          ? "border border-danger"
                          : ""
                      }`}
                      name="job_title"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.job_title} placeholder="Job Title*" id="job_title" />
              </div>
              <div className="section-form-1">
                <input type="text"
                      className={`form-control bg-light ${
                        formik.touched.company && formik.errors.company
                          ? "border border-danger"
                          : ""
                      }`}
                      placeholder="Company*"
                      name="company"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.company} id="company_name" />
                <input type="text"
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
                      value={formik.values.phone_number} id="mobile" />
              </div>
              <input type="email"
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
                  value={formik.values.business_email} id="email" />
              <div className="section-form-2">
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
                <select>
                  <option>Choose Industry</option>
                  <option></option>
                </select>
              </div>
              <textarea placeholder="Leave a message"
              type="text"
              className={`form-control bg-light ${
                formik.touched.specific_request &&
                formik.errors.specific_request
                  ? "border border-danger"
                  : ""
              }`}
              name="specific_request"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.specific_request}
              ></textarea>
              <div className="contact-section-submit">
                <button type="submit">Send Us Email</button>
              </div>
              <div className="section-3-form-tnc">
                <p>
                  By clicking the “Send” button, you are agreeing to the Terms
                  of Use and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
