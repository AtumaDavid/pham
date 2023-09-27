import React from "react";
import "../Stylesheet/prescription.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiSolidPlusCircle } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import Cards from "../components/Cards";
import Activities from "../components/Activities";
import activitiesData from "../components/Activities";
import Topnav from "../components/Topnav";

const Prescription = () => {
  const [showActivities, setShowActivities] = useState(true);

  const handleButtonClick = () => {
    setShowActivities(!showActivities);
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

  return (
    <div className="prescription_body">
      <Topnav />
      <div className="prescription">
        <div ref={dropdownRef} className="drop">
          <button onClick={toggleDropdown}>
            Prescriptions manager
            <span>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <div className="dropdown">
              <Link to='/prescription/new_prescription' ><BiSolidPlusCircle /> Add new prescription
              </Link>
                
              <Link to='/prescription/all_prescription'> <FiEye /> View all prescriptions
              </Link>
              
            </div>
          )}
        </div>

        <Cards />

        <div className="view_button">
          <button onClick={handleButtonClick}>View custom report</button>
        </div>

        <div className="recent">
          <Activities data={activitiesData} />
        </div>
      </div>
    </div>
  );
};

export default Prescription;
