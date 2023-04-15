import React from "react";
import "../styles/covid.css";
import Images from "../components/ImagesImport";
import "../styles/components.css";
import CallIcon from "@mui/icons-material/Call";
import SpeakToAnalystForm from "../components/SpeakToAnalystForm";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CovidContact = () => {
  return (
    <>
        <div className="row covid-contact-section">
         
          <div className="col-4">
            <div className="contact-card-section bg-white">

            <div className="contact-callus my-3">
              <div className="d-flex flex-row mb-3">
                <CallIcon />
                <h3 className="ms-3 call_us_heading"> Call Us</h3>
              </div>
              <div className="d-flex flex-row">
                <img
                  src={Images.american_flag}
                  alt="flag"
                  className="call_us_american_img"
                />
                <p className="call_us_para ms-3"> +12066561175</p>
              </div>

              <div className="d-flex flex-row">
                <img
                  src={Images.london_flag}
                  alt="flag"
                  className="call_us_london_img "
                  />
                <p className="call_us_para ms-3"> +442066561175</p>
              </div>
            </div>
            <div className="contact-mailus">
              <div className="d-flex flex-row my-3">
                <MailIcon /> <h2 className="ms-3 mailus_heading">Mail Us</h2>
              </div>
              <p className="mailus_para mb-5">Sales@elloramarketresearch.com</p>
            </div>

            <div className="contact-address">
              <div className="d-flex flex-row ">
                <LocationOnIcon />
                <h3 className="address_heading ms-3"> Address Us</h3>
              </div>
              <p className="address_para">
                Lorem ipsum dolor sit amet consectetur.{" "}
              </p>
            </div>
          </div>
  </div>
          
          <div className="col-lg-8 col-md-8 col-sm-0">
            <SpeakToAnalystForm />
          </div>
        </div>
    </>
  );
};

export default CovidContact;
