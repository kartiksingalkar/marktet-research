import React, { useEffect, useState } from "react";
import Images from "./ImagesImport";
import "../styles/components.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";


const Topbar = () => {

  const [userData, setUserdata] = useState([]);
  const [filterdData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        setUserdata(response.data);
        setFilteredData(response.data);
      });
  }, []);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    console.log(getSearch);
    if (getSearch.length > 0) {
      const searchData = userData.filter((item) =>
        item.title.toLowerCase().includes(getSearch)
      );
      setUserdata(searchData);
    } else {
      setUserdata(filterdData);
    }
    setQuery(getSearch);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto  mb-lg-0 d-flex justify-content-center navbar_parent ">
            <li className="nav-item mail_icon  d-flex flex-row">
              <MailIcon className="mt-2" />
              <a
                className="nav-link "
                aria-current="page"
                href="mailto:sales@elloramarketresearch.com"
              >
                Sales@elloramarketresearch.com
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                aria-current="page"
                href="tel:+12066561175"
              >
                <CallIcon />
              </a>
            </li>
            <li className="nav-item american-text d-flex flex-row">
              <img
                className="american_img mt-2"
                src={Images.american_flag}
                alt="American-flag"
                width="36"
                height="24"
              />
              <a className="nav-link" href="tel:+12066561175">
                +12066561175
              </a>
            </li>
            <li className="nav-item london-text d-flex flex-row">
              <img
                className="london_img mt-2"
                src={Images.london_flag}
                alt="London-flag"
                width="36"
                height="24"
              />
              <a className="nav-link" href="tel: +442066561175">
                +442066561175
              </a>
            </li>
          </ul>
          <form className="d-flex ">
            <div className="topbar_search">
              <SearchIcon className="topbar_search_icon" />
              <input
                id="browser"
                list="browsers"
                name="name"
                value={query}
                onChange={(e) => handlesearch(e)}
                className="form-control me-2 topbar_input_feild"
                type="search"
                placeholder={`Search`}
                aria-label="Search"
                autoComplete="off"
              />

              <datalist id="browsers">
                {userData.map((getUser, index) => (
                  <option key={`${getUser.id}`} value={getUser.title}>
                    {getUser.title}
                  </option>
                ))}
              </datalist>
            </div>

            <div className="">
              <select className="form-select form-select-sm me-5 topbar_select">
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
