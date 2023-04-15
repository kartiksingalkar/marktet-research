import React from "react";
import Images from '../components/ImagesImport';
import '../styles/contactus.css';
import '../styles/components.css';

const ContactInfoCommon = () => {
  return (
    <>
      <div className="contact-info-common">
        <div className="contact-info-call-to">
        <img src={Images.call} alt="" />
        <img src={Images.american_flag} alt="" />
        <p>+12066561175</p>
        <img src={Images.london_flag} alt="" />
        <p>+442066561175</p>
        </div>
        <div className="contact-info-mailto">
        <img src={Images.mail} alt="" />
        <a href="mailto:sales@elloramarketresearch.com">
          <span className="span1">sales@elloramarketresearch.com</span>
        </a>
        </div>
      </div>
    </>
  );
};

export default ContactInfoCommon;
