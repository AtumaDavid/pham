import React, { useState } from "react";
import "../Stylesheet/prescription.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Topnav from "../components/Topnav";
import PatientStepBar from "../components/PatientStepBar";
import PatientForm from "../components/PatientForm";
import PatientMedicalHistory from "../components/PatientMedicalHistory";
import PatientAppointment from "../components/PatientAppointment";
import PatientSummary from "../components/PatientSummary";
import ContextApi from "../context/ContextApi";
import PatientAnalysis from "../components/PatientAnalysis";
import PatientDetails from "./PatientDetails";

const NewPatient = () => {
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = (e) => {
    console.log("User Data:", userData);
    e.preventDefault();
    setFinalData((finalData) => [...finalData, userData]);
    setUserData([]);
    setStep(1);
    console.log(finalData);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("User Data:", userData);

    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="prescription_body ">
      <Topnav />

      <ContextApi.Provider
        value={{
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <div className="prescription  ">
          <div className="border border-gray-400 h-[590px] w-[1200px] ml-12 mt-4  ">
            <PatientStepBar currentStep={step} />
            <div className="overflow-auto">
              {step === 1 && <PatientForm onContinue={handleContinue} />}
              {step === 2 && (
                <PatientMedicalHistory
                  onContinue={handleContinue}
                  onBack={handleBack}
                />
              )}
              {step === 3 && (
                <PatientAppointment
                  onContinue={handleContinue}
                  onBack={handleBack}
                />
              )}
              {step === 4 && <PatientSummary onBack={handleBack} />}
            </div>
          </div>
          <PatientDetails />
        </div>
        <ToastContainer />
      </ContextApi.Provider>
    </div>
  );
};

export default NewPatient;
