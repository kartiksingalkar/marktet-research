import React from "react";
import Images from "../components/ImagesImport";
import Carousel from "react-bootstrap/Carousel";
import "../styles/home.css";
import CountUp from "react-countup";
import MobileViewCarousel from "../components/MobileViewCarousel";
const Home = () => {
  return (
    <>
      {/* corosel section  */}
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Images.carousel_first}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Images.carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={Images.about_banner}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* About Ellora section  */}

      <div className="ellora_parent bg-light">
        <div className="row">
          <div className="col-lg-8 colg-md-8 col-sm-8 ellora_child1 p-lg-5 p-md-5">
            <h2 className="about_ellora_heading ms-5">
              About Ellora Market Research
            </h2>
            <p className="pt-lg-5 pt-sm-0 pt-md-5 about_ellora_para ms-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              natus blanditiis ipsam earum, iste praesentium quas, error
              laudantium, enim quisquam adipisci ex fuga corporis minima.
            </p>
          </div>
        </div>
        <div className="ellora_card_container">
          <div className="row ">
            <div className="ellora_child2  shadow  ">
              <div className="col ps-3 about_ellora_num-card">
                <h5 className="about_ellora_num">
                  <CountUp start={0} end={24} /> x <CountUp start={0} end={7} />
                </h5>
                <p className="common_para">
                  Sales <br /> Supports
                </p>
              </div>
              <div className="col">
                <h5 className="about_ellora_num">
                  <CountUp delay={0} start={0} end={300} />+
                </h5>
                <p className="common_para">
                  Reaserch <br /> Consultants
                </p>
              </div>
              <div className="col">
                <h5 className="about_ellora_num">
                  {" "}
                  <CountUp start={0} end={10} />
                  K+
                </h5>
                <p className="common_para">
                  Worldwide <br /> Clients
                </p>
              </div>
              <div className="col">
                <h5 className="about_ellora_num">
                  <CountUp start={0} end={10} />
                  M+
                </h5>
                <p className="common_para">
                  Datapoints in <br /> our Database
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance  section */}
      <div className="quality_assurance_container">
        <div className="row quality_mob_view">
          <div className="col col-sm-6 ">
            <img
              className="quality_assurance_img"
              src={Images.rectangle_image}
              alt="quality-img"
            />
          </div>
          <div className="col col-sm-6 quality-assurance-parent">
            <h2 className="quality_heading">Quality Assurance</h2>
            <p className="common_para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              veritatis quae debitis harum dolorem fuga? Quod nam culpa rerum
              nemo Loremquaerat eum esse nam, praesentium quis aliquam quasi uri
              delectus, maxime
            </p>
          </div>
        </div>
      </div>

      {/* latest report section  */}
      <div className="latest-reports-section">
        <h2 className="latest_report_heading">Latest Reports</h2>
        <div className="latest-report-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            eum vitae necessitatibus laboriosam sed, libero quod laudantium nemo
            nostrum mollitia.
          </p>
        </div>

        <div className="latest-report-desktop-view">
          <div className="row mx-5">
            <div className="col-lg col-sm-6">
              <img
                className="reports_cart_items"
                src={Images.rectangle_image}
                alt="report-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="reports_cart_items"
                src={Images.rectangle_image}
                alt="report-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="reports_cart_items"
                src={Images.rectangle_image}
                alt="report-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="reports_cart_items"
                src={Images.rectangle_image}
                alt="report-img"
              />
            </div>
          </div>
        </div>
        <div className="latest-report-mobile-view">
          <MobileViewCarousel />
        </div>
        <div className="report_button">
          <button className="browse_btn">Browse Latest Reports </button>
        </div>
      </div>

      {/* Forthcoming Reports  */}

      <div className="home-forthcoming-section">
        <h2 className="forthcoming_report_heading">Forthcoming Reports</h2>
        <div className="forthcoming_report_text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            eum vitae necessitatibus laboriosam sed, libero quod laudantium nemo
            nostrum mollitia. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ut consequatur ducimus magni! Alias modi provident
            eum possimus culpa earum quisquam officiiserspiciatis consequatur.
          </p>
        </div>
        <div className="forthcoming-desktop-view">
          {/* first row  */}
          <div className="row m-5">
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
          </div>

          {/* second row  */}
          <div className="row  m-5">
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
            <div className="col-lg col-sm-6">
              <img
                className="forthcoming_report_cart"
                src={Images.rectangle_image}
                alt="forthcoming-img"
              />
            </div>
          </div>
        </div>

        <div className="forthcoming-mobile-view">
          <MobileViewCarousel />
        </div>
      </div>

      {/* Industry we serve  */}

      <div className="industries-main-section-home">
        <h2 className="industries_serve_heading">Industries We Serve</h2>
        <div className="industries_we_serve_text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            eum vitae necessitatibus laboriosam sed, libero quod laudantium nemo
            nostrum mollitia.
          </p>
        </div>

        {/* first row for Industries  */}

        <div className="industries-first-line row">
          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Automotive</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Chemical & Material</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Consumer Goods</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Defense</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Facotory Automation</h6>
              </div>
            </div>
          </div>
        </div>

        {/* second row for Industries  */}
        <div className="industries-second-line row">
          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Electronic & Semiconductor</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Energy & Natural Resources</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Food & Beverages</h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">
                  Heavy Engineering Equipements
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-4 col-6">
            <div className="industries-card ">
              <div className="industries-content">
                <img src={Images.rectangle_image} alt="industry-img" />
                <h6 className="industries-text">Packaging</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By section  */}

      <div className="trusted_by_main_section slider">
        <h2 className="trusted_by_heading">Trusted By</h2>

        {/* Trusted by first row  */}
        <div className="trusted_by_section_one">
          <div className="trusted_by_cards">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards">
            <img src={Images.rectangle_image} alt="" />
          </div>
        </div>

        {/* Trusted By second row  */}

        <div className="trusted_by_section slide-track">
          <div className="trusted_by_cards slide">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards slide">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards slide">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards slide">
            <img src={Images.rectangle_image} alt="" />
          </div>
          <div className="trusted_by_cards slide">
            <img src={Images.rectangle_image} alt="" />
          </div>
        </div>
      </div>

      {/* Testimonials Section  */}
      <div className="bg-light pb-5 testimonial_main_section">
        <h2 className="testomonial_heading">Testomonial</h2>
        <div className="testmonial_container">
          <div className="row">
            <div className="col-lg col-6 ">
              <div className="testmonial_card">
                <div className="testmonial_parent">
                  <img
                    className="testomonial_img"
                    src={Images.rectangle_image}
                    alt=""
                  />
                </div>
                <p className="testmonial_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quis optio porro deleniti perspiciatis perferendis?
                </p>
              </div>
            </div>
            <div className="col-lg col-6 ">
              <div className="testmonial_card">
                <div className="testmonial_parent">
                  <img
                    className="testomonial_img"
                    src={Images.rectangle_image}
                    alt=""
                  />
                </div>

                <p className="testmonial_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quis optio porro deleniti perspiciatis perferendis?
                </p>
              </div>
            </div>
            <div className="col-lg col-6 ">
              <div className="testmonial_card">
                <div className="testmonial_parent">
                  <img
                    className="testomonial_img"
                    src={Images.rectangle_image}
                    alt=""
                  />
                </div>

                <p className="testmonial_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quis optio porro deleniti perspiciatis perferendis?
                </p>
              </div>
            </div>
            <div className="col-lg col-6 ">
              <div className="testmonial_card">
                <div className="testmonial_parent">
                  <img
                    className="testomonial_img"
                    src={Images.rectangle_image}
                    alt=""
                  />
                </div>

                <p className="testmonial_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quis optio porro deleniti perspiciatis perferendis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
