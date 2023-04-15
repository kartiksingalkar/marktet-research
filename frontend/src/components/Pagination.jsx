import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="pagination_button">
        <ul>
          <li>
            <Link to="#" onClick={prevPage} className="link">
              <KeyboardDoubleArrowLeftIcon />
            </Link>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={` ${currentPage === pgNumber ? "active" : ""}`}
            >
              <Link
                to="#"
                onClick={() => setCurrentPage(pgNumber)}
                className="link"
              >
                {pgNumber}
              </Link>
            </li>
          ))}
          <li>
            <Link to="#" onClick={nextPage} className="link">
              <KeyboardDoubleArrowRightIcon />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
