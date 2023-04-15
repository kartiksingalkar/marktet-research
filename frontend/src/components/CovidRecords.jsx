import React from 'react'
import Images from "../components/ImagesImport";

const CovidRecords = () => {
  return (
    <>
        <div className="covid-cards-row-1">
            <div className="covid-section-cards-1">
              <img src={Images.rectangle_small} alt="rectangle" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="covid-section-cards-2">
              <img src={Images.rectangle_small} alt="rectangle" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="covid-section-cards-3">
              <img src={Images.rectangle_small} alt="rectangle" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
    </>
  )
}

export default CovidRecords