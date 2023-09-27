import React from "react";
import "../Stylesheet/prescription.css";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import AppointmentCard from "../components/AppointmentCard";
import AppointmentRecentActivities from "../components/AppointmentRecentActivities";
import activitiesData from "../components/Activities";
import AppointmentReport from "../components/AppointmentReport";
import Topnav from "../components/Topnav";

const Appointments = () => {
  const navigate = useNavigate();
  const [showActivities, setShowActivities] = useState(true);
  const [showReport, setShowReport] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked");
    setShowActivities(false);
    setShowReport(true);
  };

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

  const handleNewAppointment = () => {
    navigate("/new-appointment"); // Navigate to the 'new-patient' page when the link is clicked
  };
  const handlePatientReport = () => {
    navigate("/appointment-report"); // Navigate to the 'new-patient' page when the link is clicked
  };
  return (
    <div className="prescription_body">
      <Topnav />
      <div className="prescription">
        <div ref={dropdownRef} className="drop">
          <button onClick={toggleDropdown} className="flex items-center ">
            Appointments manager
            <span className="">{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div className="dropdown cursor-pointer ">
              <p className="flex" onClick={handleNewAppointment}>
                <BiSolidPlusCircle className="mr-2 mt-1" /> Add new Appointment
              </p>
              <div>
                <p className="flex" onClick={handlePatientReport}>
                  <FiEye className="mr-2 mt-1" /> View all Appointments
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Using the PatientsCard component */}
        <AppointmentCard />

        <div className="view_button">
          <button >View custom report</button>
        </div>
        <div className="recent">
          {showActivities ? (
            <AppointmentRecentActivities data={activitiesData} />
          ) : (
            <AppointmentReport data={activitiesData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
