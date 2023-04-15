import React from "react";
import "../../styles/services.css";
import Images from "../../components/ImagesImport.jsx";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const IndustriesHeavy = () => {

  let lorem_text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Possimus corrupti voluptas distinctio facere, accusamus
  recusandae architecto vero labore vel quidem, voluptatum
  asperiores excepturi ad reprehenderit saepe iusto ea qui nam.`;

  const { id } = useParams();

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={id}>
        <div className="industries-sub-section-1">
          <Nav variant="pills" className="flex-column">
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein"
            >
              <Nav.Link eventKey="machinery">
                <h3>Machinery</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="public-transport">
                <h3></h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src={Images.heavy_banner} alt="" />
          <div className="industries-sub-heading">
            <h1>Heavy Engineering Equipment</h1>
          </div>
          <Tab.Content>
            <Tab.Pane
              eventKey="machinery"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Machinery</h1>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>

        <div className="industries-sub-section-2">
          <div className="search-bar">
            <input
              type="text"
              class="form-control form-input"
              placeholder="Search"
            />
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="machinery">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
                    <p>{lorem_text}</p>
                    <div className="card-buttons">
                      <div className="card-request-sample-button">
                        <Link to='/requestsample'>
                        <button>Request Sample</button>
                        </Link>
                      </div>
                      <div className="card-buy-button">
                        <Link to='/buynow'>
                        <button>Buy</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
                    <p>{lorem_text}</p>
                    <div className="card-buttons">
                      <div className="card-request-sample-button">
                        <Link to='/requestsample'>
                        <button>Request Sample</button>
                        </Link>
                      </div>
                      <div className="card-buy-button">
                        <Link to='/buynow'>
                        <button>Buy</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
                    <p>{lorem_text}</p>
                    <div className="card-buttons">
                      <div className="card-request-sample-button">
                        <Link to='/requestsample'>
                        <button>Request Sample</button>
                        </Link>
                      </div>
                      <div className="card-buy-button">
                        <Link to='/buynow'>
                        <button>Buy</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
                    <p>{lorem_text}</p>
                    <div className="card-buttons">
                      <div className="card-request-sample-button">
                        <Link to='/requestsample'>
                        <button>Request Sample</button>
                        </Link>
                      </div>
                      <div className="card-buy-button">
                        <Link to='/buynow'>
                        <button>Buy</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
          
        </div>
      </Tab.Container>
    </>
  );
};

export default IndustriesHeavy;
