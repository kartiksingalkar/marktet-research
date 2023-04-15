import React from "react";
import "../../styles/services.css";
import Images from "../../components/ImagesImport.jsx";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const IndustriesPackaging = () => {

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
              <Nav.Link eventKey="packaging_prodcts">
                <h3>Packaging Products</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="printing_label">
                <h3>Printing & Label</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein2"
            >
              <Nav.Link eventKey="paper_board">
                {" "}
                <h3>Paper & Board</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <img src={Images.packaging_banner} alt="" />
          <div className="industries-sub-heading">
            <h1>Packaging</h1>
          </div>
          <Tab.Content>
            <Tab.Pane
              eventKey="packaging_prodcts"
              className="marketing-heading-container"
            >
              <div className="marketing-heading">
                <h1>Packaging Products</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="printing_label">
              <div className="marketing-heading">
                <h1>Printing & Label</h1>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="paper_board">
              <div className="marketing-heading">
                <h1>Paper & Board</h1>
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
            <Tab.Pane eventKey="packaging_prodcts">
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
            <Tab.Pane eventKey="printing_label">
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
            <Tab.Pane eventKey="paper_board">
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

export default IndustriesPackaging;
