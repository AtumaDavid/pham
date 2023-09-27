import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./components/Sidebar";
import Prescription from "./Pages/Prescription";
import Patients from "./Pages/Patients";
import Appointments from "./Pages/Appointments";
// pages
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import WelcomePage from "./Pages/WelcomePage";
import RegistrationDone from "./Pages/RegistrationDone";
import Dashboard from "./Pages/Dashboard";

import NewPatient from "./Pages/NewPatient";
import NewAppointment from "./Pages/NewAppointment";
import "./App.css";
import NewPrescription from "./Pages/NewPrescription";
import Report from "./Pages/Report";
import PatientReport from "./components/PatientReport";
import AppointmentReport from "./components/AppointmentReport";

import PatientDetails from "./Pages/PatientDetails";
import EmailConfirmed from "./Pages/EmailConfirmed";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/registered" element={<RegistrationDone />} />
          <Route path="/email_verified" element={<EmailConfirmed />} />
        </Routes>

        <div className="dashboard_layout">
          <Sidebar>
            <Routes>
              <Route path="/prescription" element={<Prescription />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route
                path="/prescription/all_prescription"
                element={<Report />}
              />
              <Route
                path="/prescription/new_prescription"
                element={<NewPrescription />}
              />
              <Route path="/new-patient" element={<NewPatient />} />
              <Route path="/patient-report" element={<PatientReport />} />
              <Route path="/patients/details" element={<PatientDetails />} />
              <Route
                path="/appointment-report"
                element={<AppointmentReport />}
              />
              <Route path="/new-appointment" element={<NewAppointment />} />
            </Routes>
          </Sidebar>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
