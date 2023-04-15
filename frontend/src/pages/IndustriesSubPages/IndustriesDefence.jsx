import React from "react";
import "../../styles/services.css";
import Images from "../../components/ImagesImport.jsx";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const IndustriesConsumer = () => {
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
              <Nav.Link eventKey="infantry_weapons">
                <h3>Infantry Weapons & Equipment</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="military_aerospace">
                <h3>Aerospace & Defense</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein2"
            >
              <Nav.Link eventKey="military_unnamed_system">
                {" "}
                <h3>Unmanned System</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="homeland_defense">
                {" "}
                <h3>Homeland Defense</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="ammunition">
                {" "}
                <h3>Ammunition</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src={Images.defence_banner} alt="" />
          <div className="industries-sub-heading">
            <h1>Defense</h1>
          </div>
          <Tab.Content>
            <Tab.Pane
              eventKey="infantry_weapons"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Infantry Weapons & Equipment</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="military_aerospace">
              <div className="marketing-heading">
                <h1>Military Aerospace & Defense</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="military_unnamed_system">
              <div className="marketing-heading">
                <h1>Military Unmanned System</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="homeland_defense">
              <div className="marketing-heading">
                <h1>Homeland Defense</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane
              eventKey="ammunition"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Ammunition</h1>
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
            <Tab.Pane eventKey="infantry_weapons">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
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
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
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
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
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
                <div className="industries-sub-main-card-1">
                  <img src={Images.indus_rectangle} alt="" />
                  <div className="main-card-1-report">
                    <h3>Lorem Ipsum dollar</h3>
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
            </Tab.Pane>
            <Tab.Pane eventKey="military_aerospace">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
            </Tab.Pane>
            <Tab.Pane eventKey="military_unnamed_system">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
            </Tab.Pane>
            <Tab.Pane eventKey="homeland_defense">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
            </Tab.Pane>
            <Tab.Pane eventKey="ammunition">
              <div className="section-2-main">
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
                <div className="industries-sub-main-card-1">
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
            </Tab.Pane>
          </Tab.Content>
          <div className="section-2-main">
            <div className="industries-sub-main-card-1">
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
            <div className="industries-sub-main-card-1">
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
            <div className="industries-sub-main-card-1">
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
            <div className="industries-sub-main-card-1">
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
        </div>
      </Tab.Container>
    </>
  );
};

export default IndustriesConsumer;
