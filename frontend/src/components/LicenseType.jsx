import React from "react";
import "../styles/components.css";
import { Link, useNavigate } from "react-router-dom";

const LicenseType = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/buynow");
  };

  return (
    <>
      <div className="border rounded bg-white">
        <div className="license_type p-2">
          <h2 className="license_type_heading">Select License Type</h2>
        </div>
        {/* radio buttons  */}
        <div className="form-check my-4 ms-3 ">
          <input
            className="form-check-input "
            type="radio"
            name="users"
            id="single_user"
            value="single_user"
          />
          <label className="form-check-label user_text" htmlFor="single_user">
            Single User License
          </label>

          <div className="d-flex float-end">
            <h4 className="user-text me-2">$5795</h4>
          </div>
        </div>

        <div className="form-check my-4 ms-3">
          <input
            className="form-check-input "
            type="radio"
            name="users"
            id="multi_user"
            value="multi_user"
          />
          <label className="form-check-label user_text" htmlFor="multi_user">
            Multi User License
          </label>

          <div className="d-flex float-end">
            <h4 className="user-text me-2">$8795</h4>
          </div>
        </div>

        <div className="form-check my-4 ms-3 mb-5">
          <input
            className="form-check-input "
            type="radio"
            name="users"
            id="corporate_user"
            value="corporate_user"
          />
          <label
            className="form-check-label user_text"
            htmlFor="corporate_user"
          >
            Corporate User License
          </label>

          <div className="d-flex float-end">
            <h4 className="user-text me-2">$11795</h4>
          </div>
        </div>

        <div className="d-flex justify-content-center my-3">
          <button className="buy_now_button" onClick={handleNavigate}>
            Buy Now
          </button>
        </div>
        <p className="text-center user_text my-2">
          Get a special pricing for start-ups & uiversities
        </p>
        <div className="d-flex justify-content-center my-4">
          <Link to='/requestdiscount'>
          <button className="discount_button">Request Discount </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LicenseType;
