import React from "react";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Images from "../components/ImagesImport";
import InsightsReports from "../components/InsightsReports";
import "../styles/insights.css";

function Insights() {

  const config = {
  };
  const { id } = useParams();

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={'market'}>
        <div className="insights-sub-section-1">
          <Nav variant="pills" className="flex-column">
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein"
            >
              <Nav.Link eventKey="market">
                <h3>Research Press Release</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein1"
            >
              <Nav.Link eventKey="thought">
                <h3>Thought Leadership</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein2"
            >
              <Nav.Link eventKey="case">
                {" "}
                <h3>Case Studies</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein3"
            >
              <Nav.Link eventKey="citation">
                {" "}
                <h3>Our Citation</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onLoad="document.body.className += ' loaded';"
              class="fadein4"
            >
              <Nav.Link eventKey="blogs">
                {" "}
                <h3>Blogs</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <img src={Images.insights_banner} alt="" />

          <Tab.Content>
            <Tab.Pane eventKey="market" className="insights-sub-heading">
              <div className="insights-sub-heading">
                <h3>Market Research Press Release</h3>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="thought">
              <div className="insights-sub-heading">
                <h3>Thought Leadership</h3>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="case">
              <div className="insights-sub-heading">
                <h3>Case Studies</h3>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="citation">
              <div className="insights-sub-heading">
                <h3>Our Citation</h3>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="blogs">
              <div className="insights-sub-heading">
                <h3>Blogs</h3>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>

        {/* Section 2 start */}
        <Tab.Content>
          <Tab.Pane eventKey="market">
            <InsightsReports
              heading="Market Research Press Release"
            />
          </Tab.Pane>
          <Tab.Pane eventKey="thought">
            <InsightsReports
            heading="Market Research Thought Leadership"
            />
          </Tab.Pane>
          <Tab.Pane eventKey="case">
            <InsightsReports
            heading="Market Research Case Studies"
            />
          </Tab.Pane>
          <Tab.Pane eventKey="citation">
            <InsightsReports
              heading="Citation"
            />
          </Tab.Pane>
          <Tab.Pane eventKey="blogs">
            <InsightsReports 
            heading="Market Research Blogs"
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default Insights;
