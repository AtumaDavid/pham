import React from "react";
import "../Stylesheet/forms.css";

// const patientsData = ();

const Patients = ({ formData, updateFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      patient: {
        ...formData,
        [name]: value,
      },
    });
  };

  return (
    <div className="step_form">
      <div className="step_input">
        <label htmlFor="name">Patient name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter patient name"
          onChange={handleInputChange}
        />
      </div>
      <div className="step_input">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          aria-label="Select patient gender"
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            Select patient gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="step_input">
        <label htmlFor="contactInput">Contact details (Phone or email)</label>
        <input
          onChange={handleInputChange}
          name="contactInput"
          type="text"
          id="contactInput"
          placeholder="Enter contact information"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>
      <div className="step_input">
        <label htmlFor="age">Age</label>
        <input
          onChange={handleInputChange}
          name="age"
          type="text"
          id="age"
          placeholder="Enter age"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>

      <div className="step_input">
        <label htmlFor="pulse">Pulse</label>
        <input
          onChange={handleInputChange}
          name="pulse"
          type="text"
          id="pulse"
          placeholder="Enter pulse"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>

      <div className="step_input">
        <label htmlFor="weight">Weight</label>
        <input
          onChange={handleInputChange}
          name="weight"
          type="text"
          id="weight"
          placeholder="Enter weight"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>

      <div className="step_input">
        <label htmlFor="height">Height</label>
        <input
          onChange={handleInputChange}
          name="height"
          type="text"
          id="height"
          placeholder="Enter height"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>

      <div className="step_double">
        <div className="step_inputs">
          <label htmlFor="systolic">Systolic (mmHg)</label>
          <input
            onChange={handleInputChange}
            name="systolic"
            type="text"
            id="systolic"
            placeholder="Enter value"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        <div className="slash">/</div>
        <div className="step_inputs">
          <label htmlFor="diastolic">Diastolic (mmHg)</label>
          <input
            onChange={handleInputChange}
            name="diastolic"
            type="text"
            id="diastolic"
            placeholder="Enter value"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
      </div>

      <div className="step_input">
        <label htmlFor="temperature">Temperature (°C)</label>
        <input
          onChange={handleInputChange}
          name="temperature"
          type="text"
          id="temperature"
          placeholder="Enter value"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>

      <div className="step_input">
        <label htmlFor="complaints">Chief Complaints</label>
        <textarea
          onChange={handleInputChange}
          placeholder="Enter a description..."
          name="complaints"
          id="complaints"
          rows="7"
        ></textarea>
      </div>

      <div className="step_input">
        <label htmlFor="examination">On Examination</label>
        <textarea
          onChange={handleInputChange}
          placeholder="Enter a description..."
          name="examination"
          id="examination"
          rows="7"
        ></textarea>
      </div>

      <div className="step_input">
        <label htmlFor="diagnosis">Diagnosis</label>
        <textarea
          onChange={handleInputChange}
          placeholder="Enter a description..."
          name="diagnosis"
          id="diagnosis"
          rows="7"
        ></textarea>
      </div>
    </div>
  );
};

export default Patients;
