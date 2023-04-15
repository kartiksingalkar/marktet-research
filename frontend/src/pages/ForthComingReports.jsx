import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/forthcoming.css";
import Pagination from "../components/Pagination";
import Records from "../components/Records";

import IndustriesDropdown from "../components/IndustriesDropdown";

import Images from "../components/ImagesImport";
import MobileViewCarousel from "../components/MobileViewCarousel";

const ForthComingReports = () => {
  // const [isVisible, setVisibility] = useState(false);
  const [reportsData, setReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(reportsData.length / recordsPerPage);

  const currentRecords = reportsData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setReportData(response.data);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row my-5 ">
          <div className="col-4 industries-dropdown-forth">
            <div className="common-border">
              <h2 className="report-heading pt-5">Report By Industries</h2>
              <IndustriesDropdown />
            </div>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-0">
            <div className="row total-reports">
              <h3 className="total_report_heading">
                Total Reports - xxx
              </h3>
            </div>

            <Records data={currentRecords} />
            <div className="d-flex justify-content-center my-5">
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="reports-section-3-reasons">
        <h2 className="emr-heading pt-5">5 Reasons To Buy From EMR</h2>
        <div className="emr-desktop-view">
        <div className="emr-parent "> 
          <div className="emr-common-border  emr-child"> 
              
                <img className="emr_img" src={Images.rectangle_small} alt="" />
            <p className="emr_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              et.
            </p>
    
          </div>
          
          <div className="emr-common-border  emr-child "> 
              
              <img className="emr_img" src={Images.rectangle_small} alt="" />
          <p className="emr_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            et.
          </p>
  
        </div>    

         <div className="emr-common-border  emr-child "> 
              
                <img className="emr_img" src={Images.rectangle_small} alt="" />
            <p className="emr_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              et.
            </p>
          </div>   
           <div className="emr-common-border  emr-child "> 
              
                <img className="emr_img" src={Images.rectangle_small} alt="" />
            <p className="emr_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              et.
            </p>
          </div>
          <div className="emr-common-border  emr-child "> 
              
              <img className="emr_img" src={Images.rectangle_small} alt="" />
          <p className="emr_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            et.
          </p>
        </div>   
        </div>
        </div>
        <div className="emr-carousel">
          <MobileViewCarousel/>
        </div>
       
      </div>
    </>
  );
};

export default ForthComingReports;
