import React from "react";
import LicenseType from "../../components/LicenseType";
import NeedMoreInfo from "../../components/NeedMoreInfo";
import RequestForm from "../../components/RequestForm";
import '../../styles/payandque.css';
import "../../styles/components.css";
import Images from "../../components/ImagesImport";

const RequestCustom = () => {
    
  return (
    <>
      <div className="bg-light pb-5">
           {/* top section to write code  */}
        <div className="request_sample_top "></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-0">
               <h2 className="request_sample_heding mt-4">
                Energy Balls Market
              </h2>
              <p className="request_sample_para py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, asperiores eum nulla debitis eos saepe explicabo qui
                nihil repellendus minima commodi aliquam cum consectetur cumque?
              </p>
                  <RequestForm 
                  heading="Request For Custom Research"
                  buttonName="Get Custom Guide"
                  imagePath={Images.send}
                  />
                </div>
            <div className="col-lg-4 col-md-4 col-sm-0 mt-5">
               {/* select license type section  */}
               <LicenseType/>
               {/* Need more info section  */}
               <NeedMoreInfo/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCustom;
