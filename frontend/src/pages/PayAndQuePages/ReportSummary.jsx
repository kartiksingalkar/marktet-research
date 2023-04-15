import React from "react";
import LicenseType from "../../components/LicenseType";
import NeedMoreInfo from "../../components/NeedMoreInfo";
import Images from "../../components/ImagesImport";
import "../../styles/payandque.css";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Faq from "react-faq-component";
import Nav from "react-bootstrap/Nav";
import RequestForm from "../../components/RequestForm";


const ReportSummary = () => {

  const data = {
    rows: [
      {
        title: "Hiring For Research/ Senior Research Analyst",
        content: (
          <p>
            <hr></hr>Promoting brands using the internet and other types of
            digital communication to interact with potential
          </p>
        ),
      },
      {
        title: "Hiring For Sales/ Business Development Manager",
        content: (
          <p>
            <hr></hr>Promoting brands using the internet and other types of
            digital communication to interact with potential
          </p>
        ),
      },
      {
        title: "Hiring For Marketing/ Web Marketing Executive",
        content: (
          <p>
            <hr></hr>Marketing is the key to attracting and getting leads from
            them. they have realised that adopting digital is
            companies in India.
          </p>
        ),
      },
      {
        title: "Hiring For Research Industry/ Content Writer",
        content: (
          <p>
            <hr></hr>The essential advantage of digital marketing is that it
            allows you to contact a specific audience cost-effectively and
            quantifiable.You might learn a lot about
            the potential to produce social currency.
          </p>
        ),
      },
    ],
  };
  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
  };
  const config = {
  };
  const { id } = useParams();

  const lorem_text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat beatae
   aliquid minus ipsum quasi temporibus veritatis hic esse? Quae 
   doloribus voluptatum natus nostrum porro maxime cumque quia 
   facilis sunt corrupti!`;

  const lorem_short = `Lorem, ipsum dolor sit sandae magni voluptatibus accusamus 
  eligendi. Ipsa velit ratione optio quaerat harum, veritatis consectetur?`;

  return (
    <>
    <Tab.Container id="left-tabs-example" defaultActiveKey={'summary'}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-0 pe-5 pb-5">
            <p className="reports_summary_para">{lorem_short}</p>
            <div className="reports-social-icons  ">
              <div className="row">
                <div className="col-8 region_text">
                  <p>Region:</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 d-flex ">
                  <img
                    className="report_social mx-2 "
                    src={Images.linkedin_blue}
                    alt=""
                  />
                  <img
                    className="report_social mx-2"
                    src={Images.fb_blue}
                    alt=""
                  />
                  <img
                    className="report_social mx-2"
                    src={Images.insta_blue}
                    alt=""
                  />
                  <img
                    className="report_social mx-2"
                    src={Images.mail_blue}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="report_first_hr"></hr>

            <div className="reports-main-contain">
              {/* button section  */}
              <div className="d-flex justify-content-between">

                <Nav.Item onLoad="document.body.className += ' loaded';"
              class="summary-button-fade">
                <Nav.Link eventKey="summary">
                {" "}
                <button className="reports_common_btn">Summary</button>
              </Nav.Link>
                </Nav.Item>

                <Nav.Item onLoad="document.body.className += ' loaded';"
              class="summary-button-fade">
                <Nav.Link eventKey="toc">
                {" "}
                <button className="reports_common_btn">TOC</button>
              </Nav.Link>
                </Nav.Item>

                <Nav.Item onLoad="document.body.className += ' loaded';"
              class="summary-button-fade">
                <Nav.Link eventKey="segmentation">
                {" "}
                <button className="reports_common_btn">Segmentation</button>
              </Nav.Link>
                </Nav.Item>

                <Nav.Item onLoad="document.body.className += ' loaded';"
              class="summary-button-fade">
                <Nav.Link eventKey="methodology">
                {" "}
                <button className="reports_common_btn">Methodology</button>
              </Nav.Link>
                </Nav.Item>

                <Nav.Item onLoad="document.body.className += ' loaded';"
              class="summary-button-fade">
                <Nav.Link eventKey="request-sample-pdf">
                {" "}
                <button className="pdf_btn">
                  <img className="request_pdf" src={Images.request_sample} alt="sample-icon" />
                  Request Sample PDF
                </button>
              </Nav.Link>
                </Nav.Item>
              </div>
              <hr className="report_second_hr" />

              <Tab.Content>
              <Tab.Pane eventKey="summary" className="reports-buttons">
                  <p className="market_insights_heading mt-5">
                    Key Mareket Insights
                  </p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <div className="report-section-3">
                    <h3>
                    Frequently Asked Questions
                    </h3>
                    <div className="report-section-3-faq">
                    <Faq data={data} styles={styles} config={config} />
                    </div>
                  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="toc" className="reports-buttons">
                <div className="report-section-3-faq-toc">
                    <Faq data={data} styles={styles} config={config} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="segmentation" className="reports-buttons">
              <p className="market_insights_heading mt-5">
                    Make Segmentation 
                  </p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
                  <p className="market_insights_common_para">{lorem_text}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="methodology" className="reports-buttons">
                  <p className="market_insights_heading mt-5">
                      Methodology
                    </p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                      <p className="market_insights_common_para">{lorem_text}</p>
                  
              </Tab.Pane>
              <Tab.Pane eventKey="request-sample-pdf" className="reports-buttons">
                <div className="request-pdf-form">
              <RequestForm
                heading='Request a Free Sample'
                buttonName='Get Sample'
                imagePath={Images.sample}
                />
                </div>
              </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="reports-right-section">
              <LicenseType />
              <NeedMoreInfo />
            </div>
          </div>
        </div>
      </div>
      </Tab.Container>
    </>
  );
};

export default ReportSummary;
