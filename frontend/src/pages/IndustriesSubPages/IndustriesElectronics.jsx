import React from "react";
import "../../styles/services.css";
import Images from "../../components/ImagesImport.jsx";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const IndustriesElectronics = () => {

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
              <Nav.Link eventKey="test_measurement">
                <h3>Test & Measurement</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="medical_electronics">
                <h3>Medical Electronics</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein2"
            >
              <Nav.Link eventKey="ics">
                {" "}
                <h3>ICS, LED & PCB</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="semiconductors">
                {" "}
                <h3>Semiconductors</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein5"
            >
              <Nav.Link eventKey="embedded">
                <h3>Embedded</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="photonics">
                {" "}
                <h3>Photonics</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="sensors">
                {" "}
                <h3>Sensors</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src={Images.electronics_banner} alt="" />
          <div className="industries-sub-heading">
            <h1>Electronics & Semiconductors</h1>
          </div>
          <Tab.Content>
            <Tab.Pane
              eventKey="test_measurement"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Test & Measurement</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="medical_electronics">
              <div className="marketing-heading">
                <h1>Medical Electronics</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="ics">
              <div className="marketing-heading">
                <h1>ICS, LED & PCB</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="semiconductors">
              <div className="marketing-heading">
                <h1>Semiconductors</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="embedded">
              <div className="marketing-heading">
                <h1>Embedded</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="photonics">
              <div className="marketing-heading">
                <h1>Photonics</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sensors">
              <div className="marketing-heading">
                <h1>Sensors</h1>
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
            <Tab.Pane eventKey="test_measurement">
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
            <Tab.Pane eventKey="medical_electronics">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
            <Tab.Pane eventKey="ics">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
            <Tab.Pane eventKey="semiconductors">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
            <Tab.Pane eventKey="embedded">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
            <Tab.Pane eventKey="photonics">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
            <Tab.Pane eventKey="sensors">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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
                    <h3>Lorem Ipsum</h3>
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

export default IndustriesElectronics;
