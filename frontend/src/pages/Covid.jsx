import axios from "axios";
import React, { useEffect, useState } from "react";
import Images from "../components/ImagesImport";
import Pagination from "../components/Pagination";

import "../styles/covid.css";

const Covid = () => {
  const [covidData, setCovidData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(covidData.length / recordsPerPage);

  const currentRecords = covidData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=100`)
      .then((response) => {
        setCovidData(response.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);
  return (
    <>
      <div className="covid-container">
        <div className="covid-section-1">
          <img src={Images.covid_banner} alt="banner" />
        </div>
        <div className="covid-section-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium perspiciatis eveniet quas. Distinctio rerum id ducimus,
            doloremque, facere assumenda error delectus quae ipsam, eius fugit.
            Corporis voluptates minima corrupti voluptas? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur nostrum aperiam,
            expedita laboriosam neque assumenda pariatur porro voluptatem quasi,
            sapiente deleniti amet voluptatum sit facilis accusamus inventore
            tenetur optio quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            ullam voluptatibus blanditiis, officia consequatur eius, minima est
            maiores dolores quasi maxime, pariatur necessitatibus nisi quidem
            temporibus natus repellendus! Dolores, dolorem. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Deserunt voluptas illum
            repellat numquam facere accusantium debitis magnam eum suscipit unde
            blanditiis fugiat iusto distinctio commodi minima odio, ab rem a!
          </p>
        </div>
        <div className="covid-section-3">
          <div className="covid_container">
            {currentRecords.map((data, index) => (
              <div key={index} className="covid-card">
                <div className="d-flex flex-row px-4 py-4">
                  <img className="covid_img" src={data.url} alt="rectangle" />
                  <p className="ps-4">
                    {data.id} {data.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center my-5">
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="covid-speak-container">
            <a href="/covid/talk">
              <div className="covid-speak-button">
                <button>
                  Speak to Analysts to Understand Impact of Covid-19
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
