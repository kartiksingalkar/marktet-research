import React from "react";
import Collapsible from "react-collapsible";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "../styles/forthcoming.css";

const IndustriesDropdown = () => {
  return (
    <>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Automotive</h3>
            </div>
          }
          // onOpening={() => setVisibility(true)}
          // onClose={() => setVisibility(false)}
          // triggerSibling={() => <RemoveIcon icon="chevron-down" aria-hidden />}
        >
          <div className="ms-5 common-text">
            <p>Automotive</p>
            <p>Automotive Parts</p>
            <p>Marine</p>
            <p>Public Transport</p>
          </div>
        </Collapsible>
      </div>

      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Chemicals & Materials</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Adhesives & Sealants</p>
            <p>Advanced Materials</p>
            <p>Chemicals</p>
            <p>Composites</p>
            <p>Metals & Minerals</p>
            <p>Nanomaterials</p>
            <p>Plastics</p>
          </div>
        </Collapsible>
      </div>

      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Consumer</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Consumer Electronics</p>
            <p>Household</p>
            <p>Personal Care Products</p>
            <p>Retail</p>
            <p>Sporting Goods & Equipements</p>
          </div>
        </Collapsible>
      </div>

      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Defense</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Ammunition</p>
            <p>Homeland Defense</p>
            <p>Infantry Weapons & Equipement</p>
            <p>Military Aerospace & Defense</p>
            <p>Military Unmanned Systems</p>
          </div>
        </Collapsible>
      </div>

      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Electronics & Semiconductors</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Embedded</p>
            <p>ICS ,LED & PCB </p>
            <p>Medical Electronics</p>
            <p>Photonics</p>
            <p>Semiconductors</p>
            <p>Sensors</p>
            <p>Test & Measurement</p>
          </div>
        </Collapsible>
      </div>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Energy & Natural Resources</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Environmental</p>
            <p>Mining</p>
          </div>
        </Collapsible>
      </div>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Factory Automation</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Controls</p>
            <p>Drives</p>
            <p>Energy Management</p>
            <p>Instrumentation</p>
            <p>Networking</p>
            <p>Sensor</p>
          </div>
        </Collapsible>
      </div>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Food & Beverages</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Beverage</p>
            <p>Agriculture</p>
            <p>Food</p>
            <p>Food Ingredients</p>
            <p>Food Service</p>
          </div>
        </Collapsible>
      </div>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading pe-2">
                Heavy Engineering Equipement
              </h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Machinery</p>
          </div>
        </Collapsible>
      </div>
      <div className="my-4 ms-5">
        <Collapsible
          trigger={
            <div className="d-flex">
              <AddIcon className="me-2" />
              <h3 className="common-heading">Packaging</h3>
            </div>
          }
        >
          <div className="ms-5 common-text">
            <p>Packaging Products</p>
            <p>Paper & Board</p>
            <p>Printing & Label</p>
          </div>
        </Collapsible>
      </div>
    </>
  );
};

export default IndustriesDropdown;
