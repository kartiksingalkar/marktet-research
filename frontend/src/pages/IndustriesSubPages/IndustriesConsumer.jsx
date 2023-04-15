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
              <Nav.Link eventKey="sports-goods">
                <h3>Sporting Goods & Equipment</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="personal_care">
                <h3>Personal Care Products</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein2"
            >
              <Nav.Link eventKey="consumer-electronics">
                {" "}
                <h3>Consumer Electronics</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="household">
                {" "}
                <h3>Household</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein4"
            >
              <Nav.Link eventKey="retail">
                {" "}
                <h3>Retail</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src={Images.consumer_banner} alt="" />
          <div className="industries-sub-heading">
            <h1>Consumer Goods</h1>
          </div>
          <Tab.Content>
            <Tab.Pane
              eventKey="sports-goods"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Sporting Goods & Equipment</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="personal_care">
              <div className="marketing-heading">
                <h1>Personal Care Products</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="consumer-electronics">
              <div className="marketing-heading">
                <h1>Consumer Electronics</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="household">
              <div className="marketing-heading">
                <h1>Household</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane
              eventKey="retail"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Retail</h1>
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
            <Tab.Pane eventKey="sports-goods">
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
            <Tab.Pane eventKey="personal_care">
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
            <Tab.Pane eventKey="consumer-electronics">
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
            <Tab.Pane eventKey="household">
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
            <Tab.Pane eventKey="retail">
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

export default IndustriesConsumer;
