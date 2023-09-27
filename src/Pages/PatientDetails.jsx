import React, { useState, useRef } from "react";
import "../Stylesheet/prescription.css";
import Topnav from "../components/Topnav";
import DetailSummary from "../components/DetailSummary";
import Appointments from "../components/Appointments";
import NewAppointment from "../components/NewAppointment";
import PatientNotes from "../components/PatientNotes";
import PatientDocuments from "../components/PatientDocuments";
import NewDocument from "../components/NewDocument";
import NewNote from "../components/NewNote";
import PatientPrescriptions from "../components/PatientPrescriptions";
import PatientBilling from "../components/PatientBilling";
import NewInvoice from "../components/NewInvoice";
import PatientAnalysis from "../components/PatientAnalysis";
import NewPrescription from "../components/NewPrescription";

const PatientDetails = () => {
  const [filter, setFilter] = useState("Appointments");
  const [popup, setPopup] = useState("");

  const getButtonText = () => {
    switch (filter) {
      case "Appointments":
        return "Add appointment";
      case "newAppointment":
        return "Add appointment";
      case "Notes":
        return "Add note";
      case "Documents":
        return "Add document";
      case "newDocument":
        return "Add document";
      case "Prescriptions":
        return "Add prescription";
      case "newPrescription":
        return "Add prescription";
      case "Billing":
        return "Add invoice";
      case "newInvoice":
        return "Add Invoice";
      case "Analytics":
        return "Add Data";
      default:
        return "";
    }
  };

  const buttonClick = () => {
    if (filter === "Appointments") {
      setFilter("newAppointment");
    } else if (filter === "Documents") {
      setFilter("newDocument");
    } else if (filter === "Notes") {
      setPopup("newNote");
    } else if (filter === "Billing") {
      setFilter("newInvoice");
    } else if (filter === "Prescriptions") {
      setFilter("newPrescription");
    }
  };

  const closePopup = () => {
    setPopup("");
  };

  const newNoteRef = useRef(null);

  return (
    <div
      className={
        popup === "newNote" ? "bg-black bg-opacity-25" : "presctiption_body"
      }
    >
      <Topnav />
      <div className="p-5 ml-64 border border-stone-500 rounded-md mt-12 mb-4 w-[80%] h-[840px] font-euclid-circular-a">
        <div className="flex justify-between items-center">
          <h2 className="ml-3 text-zinc-800 text-opacity-80 text-lg font-semibold leading-7 tracking-wide">
            Audrey Freeborn
          </h2>
          <button
            onClick={() => buttonClick()}
            className="text-white w-[165px] h-[42px] px-3 pt-1 pb-[3px] rounded-[10px] justify-center items-center inline-flex bg-[#009fe3] text-center p-2 cursor-point text-base font-medium leading-[34.53px] tracking-wide"
          >
            {getButtonText()}
          </button>
        </div>

        {/* Buttons for Patient Details */}
        <div className="report_header mt-6">
          <div className="button detail_options">
            <button
              className={
                filter === "Appointments" || filter === "newAppointment"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("Appointments")}
            >
              Appointments
            </button>
            <button
              className={
                filter === "Notes" || popup === "newNote" ? "active" : ""
              }
              onClick={() => setFilter("Notes")}
            >
              Notes
            </button>
            <button
              className={
                filter === "Documents" || filter === "newDocument"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("Documents")}
            >
              Documents
            </button>
            <button
              className={
                filter === "Prescriptions" || filter === "newPrescription"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("Prescriptions")}
            >
              Prescriptions
            </button>
            <button
              className={
                filter === "Billing" || filter === "newInvoice" ? "active" : ""
              }
              onClick={() => setFilter("Billing")}
            >
              Billing
            </button>
            <button
              className={filter === "Analytics" ? "active" : ""}
              onClick={() => setFilter("Analytics")}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Rendered components depending on active state */}
        <div className="flex gap-5">
          <div>
            <DetailSummary />
          </div>
          <div className="overflow-y-auto h-[600px] overflow-hidden">
            {filter === "Appointments" && <Appointments />}
            {filter === "newAppointment" && <NewAppointment />}
            {filter === "Notes" && <PatientNotes />}
            {filter === "Documents" && <PatientDocuments />}
            {filter === "newDocument" && <NewDocument />}
            {filter === "Prescriptions" && <PatientPrescriptions />}
            {filter === "newPrescription" && <NewPrescription />}
            {filter === "Billing" && <PatientBilling />}
            {filter === "newInvoice" && <NewInvoice />}
            {filter === "Analytics" && <PatientAnalysis />}
          </div>
        </div>
        {popup === "newNote" && (
          <div ref={newNoteRef}>
            <NewNote onClose={closePopup} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetails;
