import React, { useState, useRef, useEffect } from "react";
import "../Stylesheet/forms.css";
import { RxCross1 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "./Dropdown";



const Drugs = ({ formData, updateFormData }) => {
  const [editingMode, setEditingMode] = useState(false);

  const [isDataInputted, setIsDataInputted] = useState(false);

  const [drugIndex, setDrugIndex] = useState(-1); 
  
  const [drugs, setDrugs] = useState([]);

  const [currentDrug, setCurrentDrug] = useState({
    med_name: "",
    description: "",
    startDate: "",
    endDate: "",
    recommendedDosage: "",
    intakeQuantity: "",
    intakeMeasurement: "",
    consumptionFrequency: "",
    mealTiming: "",
  });

  const allDrugs = []

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentDrug((prevState) => ({
      ...prevState,
      [name]: name === "startDate" || name === "endDate" ? new Date(value) : value,[name]: value,
    }));
    setIsDataInputted(true);

   
    updateFormData({
      drugs: [...drugs, currentDrug], 
    });
  };

  const handleSaveDrug = () => {
    setDrugs((prevDrugs) => [...prevDrugs, currentDrug]);
    setCurrentDrug({
      med_name: "",
      description: "",
      startDate: "",
      endDate: "",
      recommendedDosage: "",
      intakeQuantity: "",
      intakeMeasurement: "",
      consumptionFrequency: "",
      mealTiming: "",
    });
  };

  const [showEnteredDrugDetails, setShowEnteredDrugDetails] = useState(false);

  const handleSaveEditedDrug = () => {
    const updatedDrugs = [...drugs];
    updatedDrugs[drugIndex] = currentDrug; // Update the drug in the array
    setDrugs(updatedDrugs);
    setDrugIndex(-1); // Reset currentDrugIndex
    setCurrentDrug({
      med_name: "",
      description: "",
      startDate: "",
      endDate: "",
      recommendedDosage: "",
      intakeQuantity: "",
      intakeMeasurement: "",
      consumptionFrequency: "",
      mealTiming: "",
    });
    setEditingMode(false); 
    setIsDataInputted(false);
    

  };
  // const handleSaveDrugClick = () => {
  //   if (editingMode) {
  //     handleSaveEditedDrug(); // Call the function to save edited drug
  //   } else {
  //     if (isDataInputted) {
  //       handleSaveDrug(); // Call the function to save new drug
  //       setIsDataInputted(false); // Reset data input flag
  //     }
  //   }
  
  //   setShowEnteredDrugDetails(true);
  // };
  const [drugItems, setDrugItems] = useState([]);

  const addNewDrugItem = (newDrugItem) => {
    setDrugItems([...drugItems, newDrugItem]); // Add the new item to the array
  };

  const handleSaveDrugClick = () => {
    addNewDrugItem(currentDrug)

    
    if (
      currentDrug.med_name&&
      currentDrug.description &&
      currentDrug.startDate &&
      currentDrug.endDate &&
      currentDrug.recommendedDosage &&
      currentDrug.intakeQuantity &&
      currentDrug.intakeMeasurement &&
      currentDrug.consumptionFrequency &&
      currentDrug.mealTiming
    ) {
      if (editingMode) {
        handleSaveEditedDrug(); // Call the function to save edited drug
      } else {
        handleSaveDrug(); // Call the function to save new drug
      }
      setShowEnteredDrugDetails(true);
      setIsDataInputted(false);
      setEditingMode(false); // Exit editing mode
      setDrugIndex(-1); // Clear editing index
      setCurrentDrug({
        
        med_name: "",
        description: "",
        startDate: "",
        endDate: "",
        recommendedDosage: "",
        intakeQuantity: "",
        intakeMeasurement: "",
        consumptionFrequency: "",
        mealTiming: "",
      });
    } else {
      alert("Please fill out all required fields");
    }
  };
  const resetInputFields = () => {
    setCurrentDrug({
      med_name: "",
      description: "",
      startDate: "",
      endDate: "",
      recommendedDosage: "",
      intakeQuantity: "",
      intakeMeasurement: "",
      consumptionFrequency: "",
      mealTiming: "",
    });
  };
  
  
  
  const CustomInput = ({ value, onClick }) => (
    <div className="custom-input" onClick={onClick}>
      {value ? value : <span className="placeholder">DD/MM/YYYY</span>}
      <FiCalendar className="calendar-icon" />
    </div>
  );

 
  const handleEnterKeyPress = (index, event) => {
    if (event.key === "Enter") {
      handleEditDrug(index); // Save the edited data
    }
  };

  const handleEditDrug = (index) => {
    const updatedDrugs = drugs.map((drug, i) =>
      i === index ? { ...drug, editing: !drug.editing } : drug
    );
    setDrugs(updatedDrugs);
  };

//   const handleDisable = ()=>{
//     if (!isDataInputted){
//       disabled={disabled}
//     }
//  }

  
  const handleEditInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDrugs = [...drugs];
    updatedDrugs[index][name] = value;
    setDrugs(updatedDrugs);
  };

  



  return (
    <div className="drugs">
      <div className="step_form">
        <div className="step_input">
          <label htmlFor="med_name">Add a medication </label>
          <input
          id="med_name"
            name="med_name"
            type="text"
            placeholder="Enter medication name"
            value={currentDrug.med_name}
            onChange={handleInputChange}
          />
        </div>

        <div className="step_input">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Enter a Description..."
            name="description"
            id="description"
            rows="7"
            value={currentDrug.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="step_doubles">
          <div className="step_inputs">
            <label htmlFor="start_date">Start Date</label>
            <DatePicker
            id="startDate"
              selected={currentDrug.startDate}
              onChange={(date) =>
                handleInputChange({
                  target: { name: "startDate", value: date },
                })
              }
              dateFormat="dd/MM/yyyy"
              customInput={<CustomInput />}
              placeholderText="DD/MM/YYYY"
              isClearable
            />
          </div>

          <div className="step_inputs">
            <label htmlFor="end_date">End Date</label>
            <DatePicker
            id="endDate"
              selected={currentDrug.endDate}
              onChange={(date) =>
                handleInputChange({ target: { name: "endDate", value: date } })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              customInput={<CustomInput />}
              isClearable
            />
          </div>
        </div>

        <div className="step_input">
          <label htmlFor="recommendedDosage">Recommended dosage</label>
          <input
            id="recommendedDosage"
            name="recommendedDosage"
            type="text"
            placeholder="Enter recommended dosage"
            value={currentDrug.recommendedDosage}
            onChange={handleInputChange}
          />
        </div>

        <div className="step_doubles">
          <div className="step_inputs">
            <label htmlFor="intake_quantity">Intake quantity</label>
            <input
              type="text"
              id="intake_quantity"
              placeholder="Enter number"
              inputMode="numeric"
              pattern="[0-9]*"
              name="intakeQuantity"
              value={currentDrug.intakeQuantity}
              onChange={handleInputChange}
            />
          </div>

          <div className="step_inputs">
            <label htmlFor="intakeMeasurement">Intake measurement unit</label>
            <select
              name="intakeMeasurement"
              id="intake_measurement"
              aria-label="Select unit"
              value={currentDrug.intakeMeasurement}
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Select unit
              </option>
              <option value="ml">Ml</option>
              <option value="mg">Mg</option>
              <option value="teaspoon">Teaspoon</option>
              <option value="drop">Drop(s)</option>
              <option value="capsule">Capsule</option>
              <option value="suppository">Suppository</option>
              <option value="puff">Puff(s)</option>
            </select>
          </div>
        </div>

        <div className="step_input">
          <label htmlFor="consumptionFrequency">Consumption frequency</label>
          <select
            name="consumptionFrequency"
            id="consumption_frequency"
            aria-label="Select frequency"
            value={currentDrug.consumptionFrequency}
            onChange={handleInputChange}
          >
            <option value="" disabled selected>
              Select Consumption frequency
            </option>
            <option value="every_30_minutes">Every 30 minutes</option>
            <option value="hourly">Hourly</option>
            <option value="6_hours">Every 6 hours</option>
            <option value="every_12_hours">Every 12 hours</option>
            <option value="daily">Daily</option>
            <option value="2_days">Every 2 days</option>
          </select>
        </div>

        <div className="step_input">
          <label htmlFor="mealTiming">Meal timing</label>
          <select
            name="mealTiming"
            id="mealTiming"
            aria-label="Select meal timing"
            value={currentDrug.mealTiming}
            onChange={handleInputChange}
          >
            <option value="" disabled selected>
              Select meal timing
            </option>
            <option value="before_meal">Take before meal</option>
            <option value="after_meal">Take after meal</option>
          </select>
        </div>

        <div className="drug_btn">
          <button type="button" onClick={resetInputFields} className={[`remov ${isDataInputted ? 'active' : ''}`]} >
            <RxCross1 />
            Remove
          </button>
          <button type="button"  onClick={handleSaveDrugClick} className={`save-btn ${isDataInputted ? 'active' : ''}`} disabled={!isDataInputted } > 
            Save drug detail{" "}
          </button>
        </div>
      </div>
      {showEnteredDrugDetails && (
        <div className="entered-drugs">
          <h2>
            {drugs.length === 1
              ? "1 Drug Added"
              : `${drugs.length} Drugs Added`}
          </h2>
          <table className="drug_table">
            <thead>
              <tr>
                <th className="check"></th>
                <th>S/N</th>
                <th>Drug Name</th>
                <th>Dosage</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((drug, index) => (
                <tr className="" key={index}>
                  <td className="check">
                    <input type="checkbox" />
                  </td>
                  <td className="num">#{index + 1}</td>
                  <td> {drug.med_name}</td>
                  <td className="dos">{drug.intakeQuantity}{drug.intakeMeasurement}</td>
                  <td>
                      <Dropdown setedit={setEditingMode} data={index} drugsData={drugs} setDrugsData={setDrugs} curr={currentDrug} setCurr={setCurrentDrug} setindex={setDrugIndex}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Drugs;
