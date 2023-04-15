import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";

const NeedMoreInfo = () => {
  return (
    <>
      <div className=" mt-5 info_container p-4">
        <h2 className="info_heading text-center mb-4">- Need More Info ? -</h2>

        <div className="d-flex justify-content-center mb-2">
          <Link to='/enquirybeforebuy'>
          <button className="info_first_button ">Enquire Before Buying</button>
          </Link>
        </div>

        <div className="d-flex justify-content-center mb-2">
          <Link to='/requestreports'>
          <button className="info_second_button">Request Methodology </button>
          </Link>
        </div>

        <div className="d-flex justify-content-center mb-2">
          <Link to='/askforreference'>
          <button className="info_third_button">Ask References</button>
          </Link>
        </div>

        <div className="d-flex justify-content-center mb-2">
          <Link to='/requestcustom'>
          <button className="info_forth_button">Free Customisation</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NeedMoreInfo;
