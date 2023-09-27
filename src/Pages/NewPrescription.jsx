import React from "react";
import { useState, useRef, useEffect } from "react";
import "../Stylesheet/forms.css";
import { BsCheck } from "react-icons/bs";
import Patients from "../Forms/Patients";
import Drugs from "../Forms/Drugs";
import Instructions from "../Forms/Instructions";
import Summary from "../Forms/Summary";
import Topnav from "../components/Topnav";

const NewPrescription = () => {
  const formContentRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    patient: {
      name: "",
      gender: "",
      contactInput: "",
      age: "",
      pulse: "",
      weight: "",
      height: "",
      systolic: "",
      diastolic: "",
      temperature: "",
      complaints: "",
      examination: "",
      diagnosis: "",
    },
    drugs: [],
    instructions: {
      allowed: "",
      expiryDate: null,
      endDate: null,
    },
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const scrollToTop = () => {
    if (formContentRef.current) {
      formContentRef.current.scrollTo(0, 0);
    }
  };

  //save form data to local storage
  const saveFormDataToLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  //load data from local storage
  const loadFormDataFromLocalStorage = () => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStage < 4) {
      scrollToTop();
      setCurrentStage(currentStage + 1);
      // console.log("Next button clicked. Current stage:", currentStage);
      saveFormDataToLocalStorage();
    }
    console.log("Form data saved:", formData);
    // console.log("Next button clicked");
  };

  const handlePrevious = () => {
    if (currentStage > 1) {
      scrollToTop();
      setCurrentStage(currentStage - 1);
      loadFormDataFromLocalStorage();
    }
  };

  useEffect(() => {
    // console.log("Current stage:", currentStage);
  }, [currentStage]);

  //load stored data
  useEffect(() => {
    loadFormDataFromLocalStorage();
  }, []);

  return (
    <div className="new">
      <Topnav />
      <div className="form-container">
        <div className="progress-indicators">
          <div className={`progress-step ${currentStage >= 1 ? "active" : ""}`}>
            <div className={`progress-indicator`}>
              <span>{currentStage > 1 ? <BsCheck /> : 1}</span>
            </div>
            <p className="progress-label">
              Patient
              <br />
              details
            </p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{ width: `${(currentStage - 1) * 100}%` }}
            />
          </div>

          <div className={`progress-step ${currentStage >= 2 ? "active" : ""}`}>
            <div className={`progress-indicator`}>
              <span>{currentStage > 2 ? <BsCheck /> : 2}</span>
            </div>
            <p className="progress-label">
              Drug
              <br />
              details
            </p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{ width: `${(currentStage - 2) * 100}%` }}
            />
          </div>

          <div className={`progress-step ${currentStage >= 3 ? "active" : ""}`}>
            <div className={`progress-indicator`}>
              <span> {currentStage > 3 ? <BsCheck /> : 3}</span>
            </div>
            <p className="progress-label">Instructions</p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{ width: `${(currentStage - 3) * 100}%` }}
            />
          </div>

          <div className={`progress-step ${currentStage >= 4 ? "active" : ""}`}>
            <div className={`progress-indicator`}>
              <span>{currentStage > 4 ? <BsCheck /> : 4}</span>
            </div>

            <p className="progress-label">Summary</p>
          </div>
        </div>

        <form className="form-content" ref={formContentRef}>
          {currentStage === 1 && (
            <div className="steps">
              <h1>Patient Details</h1>
              <Patients
                formData={formData.patient}
                updateFormData={updateFormData}
              />
              <div className="form_btn">
                <button type="button" onClick={handleNext}>
                  Continue
                </button>
              </div>
            </div>
          )}
          {currentStage === 2 && (
            <div className="steps">
              <h1>Drug Details</h1>
              <Drugs
                formData={formData.drugs}
                updateFormData={updateFormData}
              />
              <div className="form_btn">
                <button className="back" onClick={handlePrevious}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Continue
                </button>
              </div>
            </div>
          )}
          {currentStage === 3 && (
            <div className="steps inst">
              <h1>Instructions</h1>
              <Instructions
                formData={formData.instructions}
                updateFormData={updateFormData}
              />
              <div className="form_btn">
                <button className="back" onClick={handlePrevious}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Continue
                </button>
              </div>
            </div>
          )}
          {currentStage === 4 && (
            <div className="sum_form">
              <Summary data={formData} />
              <div className="form_btn">
                <button className="back" onClick={handlePrevious}>
                  Back
                </button>
                <button>Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewPrescription;
