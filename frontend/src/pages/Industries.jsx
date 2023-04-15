import React from "react";
import "../styles/industries.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import HardwareIcon from "@mui/icons-material/Hardware";
import ScienceIcon from "@mui/icons-material/Science";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import BugReportIcon from "@mui/icons-material/BugReport";
import FactoryIcon from "@mui/icons-material/Factory";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WineBarIcon from "@mui/icons-material/WineBar";
import { BiArchiveIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <>

      {/* POP up code start here */}

      <div className="container">
        <div className="row border rounded bg-white  p-3">
          <div className="col industries-services">
            <div className="d-flex">
              <LocalShippingIcon /> <h6 className="mx-3 ">Automotive</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/automotive/auto-parts">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Automotive Parts
                </p>
              </Link>
              <Link to="/automotive/public-transport">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Public Transport
                </p>
              </Link>
              <Link to="/automotive/automotive">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Automotive
                </p>
              </Link>
              <Link to="/automotive/marine">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Marine{" "}
                </p>
              </Link>
            </div>

            <div className="d-flex">
              <HardwareIcon />{" "}
              <h6 className="mx-3"> Heavy Engineering Equipement</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/heavyequipment/machinery">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Machinery
                </p>
              </Link>
            </div>

            <div className="d-flex">
              <ScienceIcon /> <h6 className="mx-3"> Chemical & Materials</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/chemicals/adhesive_sealants">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Adhesive and Sealants
                </p>
              </Link>
              <Link to="/chemicals/advance_materials">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Advanced Materials
                </p>
              </Link>
              <Link to="/chemicals/metals">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Metals and Minerals
                </p>
              </Link>
              <Link to="/chemicals/nanomaterials">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Nanomaterials
                </p>
              </Link>
              <Link to="/chemicals/composite">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Composites
                </p>
              </Link>
              <Link to="/chemicals/chemicals">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Chemicals{" "}
                </p>
              </Link>
              <Link to="/chemicals/plactics">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Plastics
                </p>
              </Link>
            </div>
          </div>

          <div className="col industries-services">
            <div className="d-flex">
              <LocalMallIcon /> <h6 className="mx-3">Consumer Goods</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/consumer/sporting_goods">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Sporting Goods & Equipement
                </p>
              </Link>
              <Link to="/consumer/personal_care">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Personal Care Products{" "}
                </p>
              </Link>
              <Link to="/consumer/electronics">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Consumer Electronics
                </p>
              </Link>
              <Link to="/consumer/household">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Households
                </p>
              </Link>
              <Link to="/consumer/retail">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Retail
                </p>
              </Link>
            </div>

            <div className="d-flex">
              <LocalAirportIcon /> <h6 className="mx-3">Defense</h6>
            </div>

            <div className="m-2 industries_text">
            <Link to='/defence/ammunition'>
              <p>
                {" "}
                <HorizontalRuleIcon />
                Ammunition
              </p>
            </Link>
              <Link to="/defence/homeland_defense">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Homeland Defense
                </p>
              </Link>
              <Link to="/defence/infantry_weapons">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Infantry Weapons & Equipements{" "}
                </p>
              </Link>
              <Link to="/defence/military_aerospace">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Military Aerospace & Defense
                </p>
              </Link>
              <Link to="/defence/military_unnamed_system">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Military unnamed System
                </p>
              </Link>
            </div>
          </div>

          <div className="col industries-services">
            <div className="d-flex">
              <BugReportIcon />{" "}
              <h6 className="mx-3">Electronics & Semiconductors</h6>
            </div>

            <div className="m-2 industries_text">
            <Link to="/electronics/test_measurement">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Test & Measurement
                </p>
              </Link>
              <Link to="/electronics/medical_electronics">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Medical Electronics{" "}
                </p>
              </Link>
              <Link to="/electronics/ics">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  ICS ,LED & PCB
                </p>
              </Link>
            <Link to='/electronics/embedded'>
              <p>
                {" "}
                <HorizontalRuleIcon /> Embedded
              </p>
            </Link>
              <Link to="/electronics/photonics">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Photonics
                </p>
              </Link>
              <Link to="/electronics/semiconductors">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Semiconductors
                </p>
              </Link>
              <Link to="/electronics/sensors">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Sensors
                </p>
              </Link>
              
            </div>

            <div className="d-flex">
              <FactoryIcon /> <h6 className="mx-3">Factory Automation </h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/factory/controls">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Control
                </p>
              </Link>
              <Link to="/factory/drives">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Drives
                </p>
              </Link>
              <Link to="/factory/energy_management">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Energy Management
                </p>
              </Link>
              <Link to="/factory/instrumentation">
                <p>
                  {" "}
                  <HorizontalRuleIcon />
                  Instrumentation
                </p>
              </Link>
              <Link to="/factory/networking">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Newtorking
                </p>
              </Link>
              <Link to="/factory/factory-sensors">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Sensor
                </p>
              </Link>
            </div>
          </div>

          <div className="col industries-services">
            <div className="d-flex">
              <ElectricBoltIcon />{" "}
              <h6 className="mx-3"> Energy & Natural Resources</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/energy/environmental">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Environmental
                </p>
              </Link>
              <Link to="/energy/mining">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Mining
                </p>
              </Link>
            </div>

            <div className="d-flex">
              <WineBarIcon /> <h6 className="mx-3"> Food & Beverage</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/food/beverage">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Beverage
                </p>
              </Link>
              <Link to="/food/agriculture">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Agriculture
                </p>
              </Link>
              <Link to="/food/food_services">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Food
                </p>
              </Link>
              <Link to="/food/food_ingredients">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Food Ingrdients
                </p>
              </Link>
            </div>

            <div className="d-flex">
              <BiArchiveIn /> <h6 className="mx-3"> Packaging</h6>
            </div>

            <div className="m-2 industries_text">
              <Link to="/packaging/packaging_prodcts">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Packaging Products
                </p>
              </Link>
              <Link to="/packaging/paper_board">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Paper & Board
                </p>
              </Link>
              <Link to="/packaging/printing_label">
                <p>
                  {" "}
                  <HorizontalRuleIcon /> Printing & Label{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
