import React from "react";
import Images from "../components/ImagesImport";
import IndustriesDropdown from "../components/IndustriesDropdown";
import "../styles/insights.css";
import { Link } from "react-router-dom";

const InsightsReports = (props) => {
  let lorem_text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Possimus corrupti voluptas distinctio facere, accusamus
    recusandae architecto vero labore vel quidem, voluptatum
    asperiores excepturi ad reprehenderit saepe iusto ea qui nam.`;

  return (
    <>
      <div className="insights-sub-section-2">
        <h2>{props.heading}</h2>
        <div className="search-bar">
          <input
            type="text"
            class="form-control form-input"
            placeholder="Search"
          />
        </div>
        <div className="section-2-main row col-md-12">
          <div className="col-md-8">
            <div className="insights-sub-main-card-1">
              <img src={Images.indus_rectangle} alt="" />
              <div className="main-card-1-report">
                <h3>Lorem Ipsum</h3>
                <p>{lorem_text}</p>
                <div className="card-buttons">
                  <div className="card-request-sample-button">
                    <Link to="/requestsample">
                      <button>Request Sample</button>
                    </Link>
                  </div>
                  <div className="card-buy-button">
                    <Link to="/buynow">
                      <button>Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="insights-sub-main-card-1">
              <img src={Images.indus_rectangle} alt="" />
              <div className="main-card-1-report">
                <h3>Lorem Ipsum</h3>
                <p>{lorem_text}</p>
                <div className="card-buttons">
                  <div className="card-request-sample-button">
                    <Link to="/requestsample">
                      <button>Request Sample</button>
                    </Link>
                  </div>
                  <div className="card-buy-button">
                    <Link to="/buynow">
                      <button>Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="insights-sub-main-card-1">
              <img src={Images.indus_rectangle} alt="" />
              <div className="main-card-1-report">
                <h3>Lorem Ipsum</h3>
                <p>{lorem_text}</p>
                <div className="card-buttons">
                  <div className="card-request-sample-button">
                    <Link to="/requestsample">
                      <button>Request Sample</button>
                    </Link>
                  </div>
                  <div className="card-buy-button">
                    <Link to="/buynow">
                      <button>Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="insights-sub-main-card-1">
              <img src={Images.indus_rectangle} alt="" />
              <div className="main-card-1-report">
                <h3>Lorem Ipsum</h3>
                <p>{lorem_text}</p>
                <div className="card-buttons">
                  <div className="card-request-sample-button">
                    <Link to="/requestsample">
                      <button>Request Sample</button>
                    </Link>
                  </div>
                  <div className="card-buy-button">
                    <Link to="/buynow">
                      <button>Buy</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="insights-dropdown-section">
              <h1>Industries Expertise</h1>
              <IndustriesDropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsReports;
