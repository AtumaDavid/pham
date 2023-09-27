import React, { useState, useEffect } from "react";
import "../Stylesheet/forms.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

const Instructions = ({ formData, updateFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      instructions: {
        ...formData,
        [name]: value,
      },
    });
  };

  const CustomInput = ({ value, onClick }) => (
    <div className="custom-input" onClick={onClick}>
      {value ? value : <span className="placeholder">DD/MM/YYYY</span>}
      <FiCalendar className="calendar-icon" />
    </div>
  );

  const [currentDrug, setCurrentDrug] = useState({
    allowed: "",
    expiryDate: "",
    endDate: "",
  });

  const [isOneTime, setIsOneTime] = useState(true);

  const handleOneTimeClick = () => {
    setIsOneTime(true);
  };

  const handleRecurringClick = () => {
    setIsOneTime(false);
  };

  return (
    <div className="step_form">
      <h3>Availability</h3>
      <div className="in_btn">
        <button
          type="button"
          className={isOneTime === true ? "active" : ""}
          onClick={handleOneTimeClick}
        >
          One time
        </button>
        <button
          type="button"
          className={isOneTime === false ? "active" : ""}
          onClick={handleRecurringClick}
        >
          Recurring
        </button>
      </div>

      {isOneTime ? (
        <div className="one_time">
          <div className="date">
            <label htmlFor="expiry_date">Prescription expiry date</label>
            <DatePicker
              selected={currentDrug.expiryDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: "expiryDate", value: date },
                })
              }
              dateFormat="dd/MM/yyyy"
              customInput={<CustomInput />}
              placeholderText="DD/MM/YYYY"
              isClearable
            />
          </div>
        </div>
      ) : (
        <div className="one">
          <div className="date">
            <label htmlFor="expiry_date">Prescription expiry date</label>
            <DatePicker
              selected={currentDrug.expiryDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: "expiryDate", value: date },
                })
              }
              dateFormat="dd/MM/yyyy"
              customInput={<CustomInput />}
              placeholderText="DD/MM/YYYY"
              isClearable
            />
          </div>
          <div className="date">
            <label htmlFor="allowed">Number of purchases allowed</label>
            <input
              type="text"
              id="allowed"
              placeholder="Purchase frequency limit"
              inputMode="numeric"
              pattern="[0-9]*"
              name="allowed"
              value={currentDrug.allowed}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Instructions;
