
// working



import React, { useState } from "react";
import "../Stylesheet/prescription.css";

import Topnav from "../components/Topnav";
import AppointmentStepBar from "../components/AppointmentStepBar";
import PatientForm from "../components/PatientForm";
import AppointmentTask from "../components/AppointmentTask";
import PatientAppointment from "../components/PatientAppointment";
import AppointmentSummary from "../components/AppointmentSummary";

const NewAppointment = () => {
  const [step, setStep] = useState(1);
  const [showTextarea, setShowTextarea] = useState(false);

  const handleContinue = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleShowTextarea = (event) => {
    setShowTextarea(event.target.value === "Yes");
  };

  return (
    <div className="prescription_body ">
      <Topnav />
      <div className="prescription  ">
        <div className="border border-gray-400 h-[590px] w-[1200px] ml-12 mt-4  ">
          <AppointmentStepBar currentStep={step} />
          <div className="overflow-auto">
            {step === 1 && <PatientForm onContinue={handleContinue} />}
            {step === 2 && (
              <PatientAppointment
                onContinue={handleContinue}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <AppointmentTask
                onContinue={handleContinue}
                onBack={handleBack}
              />
            )}
            {step === 4 && <AppointmentSummary />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAppointment;



// trial


// import { useState, useRef, useEffect } from "react";
// // import "../Stylesheet/prescription.css";
// import "../Stylesheet/forms.css";
// import { BsCheck } from "react-icons/bs";

// import Topnav from "../components/Topnav";
// // import AppointmentStepBar from "../components/AppointmentStepBar";
// import PatientForm from "../components/PatientForm";
// import AppointmentTask from "../components/AppointmentTask";
// import PatientAppointment from "../components/PatientAppointment";
// import AppointmentSummary from "../components/AppointmentSummary";

// const NewAppointment = () => {
//   const [step, setStep] = useState(1);
//   const [showTextarea, setShowTextarea] = useState(false);

//   const handleContinue = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleShowTextarea = (event) => {
//     setShowTextarea(event.target.value === "Yes");
//   };

//   const formContentRef = useRef(null);

//   const scrollToTop = () => {
//     if (formContentRef.current) {
//       formContentRef.current.scrollTo(0, 0);
//     }
//   };

//   const [currentStage, setCurrentStage] = useState(1);
//   useEffect(() => {
//     const storedStage = localStorage.getItem("currentStage");
//     if (storedStage) {
//       setCurrentStage(parseInt(storedStage));
//     }
//   }, []);

//   const handleNext = () => {
//     if (currentStage < 4) {
//       scrollToTop();
//       setCurrentStage(currentStage + 1);
//       localStorage.setItem("currentStage", currentStage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStage > 1) {
//       scrollToTop();
//       setCurrentStage(currentStage - 1);
//       localStorage.setItem("currentStage", currentStage - 1);
//     }
//   };


//   return (
//   //   <div className="prescription_body ">
//   //     <Topnav />
//   //     <div className="prescription  ">
//   //       <div className="border border-gray-400 h-[590px] w-[1200px] ml-12 mt-4  ">
//   //         <AppointmentStepBar currentStep={step} />
//   //         <div className="overflow-auto">
//   //           {step === 1 && <PatientForm onContinue={handleContinue} />}
//   //           {step === 2 && (
//   //             <PatientAppointment
//   //               onContinue={handleContinue}
//   //               onBack={handleBack}
//   //             />
//   //           )}
//   //           {step === 3 && (
//   //             <AppointmentTask
//   //               onContinue={handleContinue}
//   //               onBack={handleBack}
//   //             />
//   //           )}
//   //           {step === 4 && <AppointmentSummary />}
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );


//   <div className="new">
//   <Topnav />
//   <div className="form-container">
//     <div className="progress-indicators">
//       <div className={`progress-step ${currentStage >= 1 ? "active" : ""}`}>
//         <div className={`progress-indicator`}>
//           <span>{currentStage > 1 ? <BsCheck /> : 1}</span>
//         </div>
//         <p className="progress-label">
//           Patient
//           <br />
//           details
//         </p>
//       </div>
//       <div className="progress-bar">
//         <div
//           className="progress-bar-inner"
//           style={{ width: `${(currentStage - 1) * 100}%` }}
//         />
//       </div>

//       <div className={`progress-step ${currentStage >= 2 ? "active" : ""}`}>
//         <div className={`progress-indicator`}>
//           <span>{currentStage > 2 ? <BsCheck /> : 2}</span>
//         </div>
//         <p className="progress-label">
//         Appointment <br /> & Delegation
//         </p>
//       </div>
//       <div className="progress-bar">
//         <div
//           className="progress-bar-inner"
//           style={{ width: `${(currentStage - 2) * 100}%` }}
//         />
//       </div>

//       <div className={`progress-step ${currentStage >= 3 ? "active" : ""}`}>
//         <div className={`progress-indicator`}>
//           <span> {currentStage > 3 ? <BsCheck /> : 3}</span>
//         </div>
//         <p className="progress-label">Task <br /> Description</p>
//       </div>
//       <div className="progress-bar">
//         <div
//           className="progress-bar-inner"
//           style={{ width: `${(currentStage - 3) * 100}%` }}
//         />
//       </div>

//       <div className={`progress-step ${currentStage >= 4 ? "active" : ""}`}>
//         <div className={`progress-indicator`}>
//           <span>{currentStage > 4 ? <BsCheck /> : 4}</span>
//         </div>

//         <p className="progress-label">Summary</p>
//       </div>
//     </div>

//     <div className="form-content" ref={formContentRef}>
//       {currentStage === 1 && (
//         <div className="steps">
//           <h1>Patient Details</h1>
//           <PatientForm />
//           <div className="form_btn">
//             <button type="button" onClick={handleNext}>
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//       {currentStage === 2 && (
//         <div className="steps">
//           <h1>Appointment & Delegation </h1>
//           <PatientAppointment/>
//           <div className="form_btn">
//             <button onClick={handlePrevious}>Back</button>
//             <button type="button" onClick={handleNext}>
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//       {currentStage === 3 && (
//         <div className="steps">
//           <h1>Task Description</h1>
//           < AppointmentTask />
//           <div className="form_btn">
//             <button onClick={handlePrevious}>Back</button>
//             <button onClick={handleNext}>Continue</button>
//           </div>
//         </div>
//       )}
//       {currentStage === 4 && (
//         <div className="steps">
//           < AppointmentSummary/>
//           <div className="  form_btn">
//             <button onClick={handlePrevious}  className="form_backbtn"  >Back</button>
//             <button>Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
// );
// };

// export default NewAppointment;
