import React from 'react';
import Images from './ImagesImport'

const Records = ({data}) => {
  return (
    <>
    
    {data.map((reports, index) => (
              <div key={index} className="report-parent common-border ">
                <div className="report-child-1">
                  <img src={Images.rectangle_small} alt='' />
                </div>
                <div className="report-child-2 ">
                    <h4 className="report_title ">
                      {reports.id}
                      {reports.title}
                    </h4 >
                    <p className="report_body">{reports.body}</p>
                  </div>
              </div>
            ))}
    </>
  )
}

export default Records