import React from "react";
import Images from "../components/ImagesImport";
import "../styles/services.css";

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="services-section-1">
          <img src={Images.services_banner} alt="services banner" />
        </div>
        <div className="services-section-2">
          <div className="sub-services-2">
            <img src={Images.rectangle_small} alt="img" />
            <div className="sub-services-1-report">
              <h3>Consultancy services</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione cum ipsum modi asperiores nam tenetur, ex fuga eos. Unde
                tempora quisquam corrupti sit recusandae voluptates magni id
                repellat modi maiores.
              </p>
            </div>
          </div>
          <div className="sub-services-2-i">
            <div className="sub-services-1">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Market Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="sub-services-2">
            <div className="sub-services-img">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Competitive Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="sub-services-2-i">
            <div className="sub-services-img">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Full Time Engagement</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="sub-services-2">
            <div className="sub-services-img">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Syndicate/ Ready Reports</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="sub-services-2-i">
            <div className="sub-services-img">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Upcoming Reports</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="sub-services-2">
            <div className="sub-services-img">
              <img src={Images.rectangle_small} alt="img" />
            </div>
            <div className="sub-services-1-report">
              <h3>Custom/ Tailormade Reports</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                cumque adipisci vero ex consequatur perspiciatis quisquam minus
                quo pariatur, eos esse enim aliquid quibusdam assumenda, quasi
                reprehenderit? Odit, ea. Beatae!
              </p>
            </div>
          </div>
          <div className="services-section-3">
          <a href="/covid/talk">
            <div className="services-speak-button">
              <button>
                Schedule a call to know more about Research Services
              </button>
            </div>
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
