import React from "react";
import "../Stylesheet/prescription.css";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import PatientsCard from "../components/PatientsCard";
import RecentActivities from "../components/RecentActivities";
import activitiesData from "../components/Activities";
// import PatientReport from "../components/PatientReport";
import Topnav from "../components/Topnav";

const Patients = () => {
  const navigate = useNavigate();
  const [showActivities, setShowActivities] = useState(true);
  const [showReport, setShowReport] = useState(false);

  // const handleButtonClick = () => {
  //   console.log("Button clicked");
  //   setShowActivities(false);
  //   setShowReport(true);
  // };

  useEffect(() => {
    const storedShowActivities = localStorage.getItem("showActivities");
    if (storedShowActivities !== null) {
      setShowActivities(JSON.parse(storedShowActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("showActivities", JSON.stringify(showActivities));
  }, [showActivities]);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNewPatient = () => {
    navigate("/new-patient"); // Navigate to the 'new-patient' page when the link is clicked
  };
  const handlePatientReport = () => {
    navigate("/patient-report"); // Navigate to the 'new-patient' page when the link is clicked
  };
  return (
    <div className="prescription_body">
      <Topnav />
      <div className="prescription">
        <div ref={dropdownRef} className="drop">
          <button onClick={toggleDropdown} className="flex items-center">
            Patients manager
            <span className="pl-5">{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div className="dropdown cursor-pointer ">
              <p className="flex" onClick={handleNewPatient}>
                <BiSolidPlusCircle className="mr-2 mt-1" /> Add new patients
              </p>
              <div>
                <p className="flex" onClick={handlePatientReport}>
                  <FiEye className="mr-2 mt-1" /> View all patients
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Using the PatientsCard component */}
        <PatientsCard />

        <div className="view_button">
          <button >View custom report</button>
        </div>
        <div className="recent">
            <RecentActivities data={activitiesData} />
        </div>
      </div>
    </div>
  );
};

export default Patients;
