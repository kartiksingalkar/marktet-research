import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/components.css";

const RequestForm = (props) => {
  console.log(props);
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
      job_title: Yup.string().required().min(2),
      company: Yup.string()
        .required()
        .min(2, "Company Name must be at least 2 character"),
      share_requirements: Yup.string().required().min(2),
    }),

    initialValues: {
      full_name: "",
      business_email: "",
      phone_number: "",
      job_title: "",
      company: "",
      share_requirements: "",
    },
    onSubmit: function (values, action) {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="sample_form_container">
        <div className="free_sample">
          <h2 className="free_sample_heading">{props.heading}</h2>
        </div>
        <div className="p-5 form-outer-space">
          <div className="row ">
            <p className="d-flex justify-content-center mb-4 request_form_para">
              Complete the form below and we'll get back to you shortly
            </p>
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
                  <div className="col">
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
                </div>

                {/* forth row  */}
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control bg-light ${
                          formik.touched.job_title && formik.errors.job_title
                            ? "border border-danger"
                            : ""
                        }`}
                        placeholder="Job Title"
                        name="job_title"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.job_title}
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
                        placeholder="Company Name"
                        name="company"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.company}
                      />
                    </div>
                  </div>
                </div>

                {/* fifth row  */}

                <div className="mb-3">
                  <textarea
                    rows="3"
                    className={`form-control bg-light ${
                      formik.touched.share_requirements &&
                      formik.errors.share_requirements
                        ? "border border-danger"
                        : ""
                    }`}
                    name="share_requirements"
                    placeholder="Share your requirements with us"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.share_requirements}
                  />
                </div>

                {/* button part  */}
                <div className="d-flex justify-content-center ">
                  <button className="common_form_button" type="submit">
                    {props.buttonName}
                    <img src={props.imagePath} alt="icons" />
                  </button>
                </div>

                <p className="d-flex justify-content-center my-4 request_form_para">
                  Your personal details are safe with us{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
