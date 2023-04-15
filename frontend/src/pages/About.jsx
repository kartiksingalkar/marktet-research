import React from "react";
import "../styles/about.css";
import Images from "../components/ImagesImport";
import Faq from "react-faq-component";


const About = () => {

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


  return (
    <>
      <div className="about-container">
        <div className="abt-section-1">
          <img src={Images.about_banner} alt="about banner" />
        </div>
        <div className="abt-section-2">
          <h1>Current Job Opportunities</h1>
          <p>
            We offer a professional work environment with excellent potential
            for career development. Competitive salaries will commensurate with
            experience. Market Research Future is a growing company with a high
            standard of excellence. We work in a fun working environment and
            welcome people with an entrepreneurial spirit.
          </p>
          <div className="abt-faq">
          <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
        <div className="abt-section-3-banner">
        <img src={Images.about_banner} alt="about banner" />
        </div>
        <div className="abt-section-3">
          <div className="abt-work">
            <h1>Working With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              voluptas! Magni magnam corrupti ab obcaecati quisquam optio quidem
              voluptatibus minus neque. Voluptas quasi minima dolorum officiis
              animi fugit. Alias, nesciunt. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Laudantium repudiandae sit
              aspernatur voluptas quia recusandae et architecto veritatis,
              magnam sunt eum quod dolores. Cumque numquam cupiditate adipisci
              repellendus ratione nesciunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              id exercitationem porro repudiandae quam? Ratione libero quos amet
              ipsam iusto expedita pariatur blanditiis minus eum! Minus eligendi
              ipsam amet ea. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quo quos sit distinctio dolorum recusandae dolores nobis
              expedita dignissimos quas excepturi inventore totam ea magni odio
              possimus quisquam optio, cumque quod.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
