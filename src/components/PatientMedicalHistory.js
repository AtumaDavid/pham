import React, { useContext, useState } from "react";
import ContextApi from "../context/ContextApi";

export default function PatientMedicalHistory(props) {
  const { userData, setUserData } = useContext(ContextApi);

  const [hostpitalized, setHostpitalized] = useState("");
  const [iDoctorCare, setIDoctorCare] = useState("");
  const [medication, setMedication] = useState("");
  const [allergies, setAllergies] = useState("");
  const [hereditary, setHereditary] = useState("");
  const [smoker, setSmoker] = useState("");
  const [drinker, setDrinker] = useState("");
  const [pregnant, setPregnant] = useState("");
  const [weightGain, setWeightGain] = useState("");
  const [preExistingCondition, setPreExistingCondition] = useState("");

  // allergy checkbox
  const [checkboxValues, setCheckboxValues] = useState({
    drug: false,
    food: false,
    latex: false,
    pollen: false,
    pest: false,
    mold: false,
    perfumes: false,
    animal: false,
    dust: false,
  });

  // Checkbox state for hereditary
  const [hereditaryCheckboxValues, setHereditaryCheckboxValues] = useState({
    heart: false,
    chest: false,
    hbp: false,
    pollenAllergy: false,
    lbp: false,
    tuberculosis: false,
    stroke: false,
    diabetes: false,
    cancer: false,
    asthma: false,
    hiv: false,
    aids: false,
    emphysema: false,
  });

  // Checkbox state for pre-existing conditions
  const [
    preExistingConditionCheckboxValues,
    setPreExistingConditionCheckboxValues,
  ] = useState({
    heartCondition: false,
    chestPain: false,
    hbpressure: false,
    pollenA: false,
    lbpressure: false,
    tuber: false,
    stk: false,
    dib: false,
    can: false,
    breathe: false,
    hiv: false,
    aids: false,
    emphysema: false,
  });

  const [textareaVisibility, setTextareaVisibility] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    // question8: false,
  });

  // State to track the visibility of allergy checkboxes
  const [showAllergyCheckboxes, setShowAllergyCheckboxes] = useState(false);

  // State to track the visibility of hereditary condition checkboxes
  const [showHereditaryCheckboxes, setShowHereditaryCheckboxes] =
    useState(false);

  // State to track the visibility of pre-existing condition checkboxes
  const [
    showPreExistingConditionCheckboxes,
    setShowPreExistingConditionCheckboxes,
  ] = useState(false);

  // Function to update user data with checkbox values
  const updateUserDataWithCheckboxes = () => {
    const updatedUserData = {
      ...userData,
      allergies: {
        drug: checkboxValues.drug,
        food: checkboxValues.food,
        latex: checkboxValues.latex,
        pollen: checkboxValues.pollen,
        pest: checkboxValues.pest,
        mold: checkboxValues.mold,
        perfumes: checkboxValues.perfumes,
        animal: checkboxValues.animal,
        dust: checkboxValues.dust,
      },
    };
    setUserData(updatedUserData);
  };

  // Function to update user data with hereditary condition checkboxes
  const updateUserDataWithHereditaryCheckboxes = () => {
    const updatedUserData = {
      ...userData,
      hereditaryConditions: {
        heart: hereditaryCheckboxValues.heart,
        chest: hereditaryCheckboxValues.chest,
        hbp: hereditaryCheckboxValues.hbp,
        pollenAllergy: hereditaryCheckboxValues.pollenAllergy,
        lbp: hereditaryCheckboxValues.lbp,
        tuberculosis: hereditaryCheckboxValues.tuberculosis,
        stroke: hereditaryCheckboxValues.stroke,
        diabetes: hereditaryCheckboxValues.diabetes,
        cancer: hereditaryCheckboxValues.cancer,
        asthma: hereditaryCheckboxValues.asthma,
        hiv: hereditaryCheckboxValues.hiv,
        aids: hereditaryCheckboxValues.aids,
        emphysema: hereditaryCheckboxValues.emphysema,
      },
    };
    setUserData(updatedUserData);
  };

  // Function to update user data with pre-existing condition checkboxes
  const updateUserDataWithPreExistingConditionCheckboxes = () => {
    const updatedUserData = {
      ...userData,
      preExistingConditions: {
        heartCondition: preExistingConditionCheckboxValues.heartCondition,
        chestPain: preExistingConditionCheckboxValues.chestPain,
        hbpressure: preExistingConditionCheckboxValues.hbpressure,
        pollenA: preExistingConditionCheckboxValues.pollenA,
        lbpressure: preExistingConditionCheckboxValues.lbpressure,
        tuber: preExistingConditionCheckboxValues.tuber,
        stk: preExistingConditionCheckboxValues.stk,
        dib: preExistingConditionCheckboxValues.dib,
        can: preExistingConditionCheckboxValues.can,
        breathe: preExistingConditionCheckboxValues.breathe,
        hiv: preExistingConditionCheckboxValues.hiv,
        aids: preExistingConditionCheckboxValues.aids,
        emphysema: preExistingConditionCheckboxValues.emphysema,
      },
    };
    setUserData(updatedUserData);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setCheckboxValues({ ...checkboxValues, [id]: checked });
    updateUserDataWithCheckboxes();
  };

  // Function to handle hereditary condition checkbox changes
  const handleHereditaryCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setHereditaryCheckboxValues({ ...hereditaryCheckboxValues, [id]: checked });
    updateUserDataWithHereditaryCheckboxes();
  };

  // Function to handle hereditary condition checkbox changes
  const handlePreExistingCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setPreExistingConditionCheckboxValues({
      ...preExistingConditionCheckboxValues,
      [id]: checked,
    });
    updateUserDataWithPreExistingConditionCheckboxes();
  };

  //onchange for select allergy
  const handleAllergiesChange = (e) => {
    const selectedValue = e.target.value;
    setAllergies(selectedValue);
    setShowAllergyCheckboxes(selectedValue === "Yes");
  };

  //onchange for select hereditary
  const handleHereditaryChange = (e) => {
    const selectedValue = e.target.value;
    setHereditary(selectedValue);
    setShowHereditaryCheckboxes(selectedValue === "Yes");
  };

  //onchange for select preExisting condition
  const handlePreExistingChange = (e) => {
    const selectedValue = e.target.value;
    setPreExistingCondition(selectedValue);
    setShowPreExistingConditionCheckboxes(selectedValue === "Yes");
  };

  const handleShowTextarea = (questionId, event) => {
    setTextareaVisibility({
      ...textareaVisibility,
      [questionId]: event.target.value === "Yes",
    });
  };

  //userdata
  const handleChange = (field, value) => {
    console.log(`Field: ${field}, Value: ${value}`);
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div>
      <div className="border border-gray-400 rounded w-[580px] mb-5 ml-[340px] mt-24 p-3">
        <h1 className="text-xl font-bold ml-3 mt-4 text-gray-600">
          Medical History
        </h1>

        <div className="h-[330px]  overflow-y-auto mt-8">
          <form className="pl-9 pr-9">
            {/* one */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 ml-2">
                Hospitalized, operated on, or serious illness in the past 3
                years?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setHostpitalized(e.target.value);
                  handleShowTextarea("question1", e);
                }}
                value={hostpitalized}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {textareaVisibility.question1 && (
                <textarea
                  name=""
                  id="1"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                  onChange={(e) =>
                    handleChange("hospitalizedDetails", e.target.value)
                  }
                />
              )}
            </div>
            {/* two */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Under doctor’s care in the past 3 years?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setIDoctorCare(e.target.value);
                  handleShowTextarea("question2", e);
                }}
                value={iDoctorCare}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {textareaVisibility.question2 && (
                <textarea
                  name=""
                  id="2"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                  onChange={(e) => handleChange("iDoctorCare", e.target.value)}
                />
              )}
            </div>
            {/* three */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Administered medication in the past 6 months?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setMedication(e.target.value);
                  handleShowTextarea("question3", e);
                }}
                value={medication}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option onChange={(e) => setMedication(e.target.value)}>
                  Yes
                </option>
                <option>No</option>
              </select>
              {textareaVisibility.question3 && (
                <textarea
                  name=""
                  id="3"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                  onChange={(e) => handleChange("medication", e.target.value)}
                />
              )}
            </div>
            {/* four */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Any allergies?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={handleAllergiesChange}
                value={allergies}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {showAllergyCheckboxes && (
                <div className="flex flex-col border mt-4 pl-4 rounded">
                  <h1 className="mb-2 mt-2 text-gray-600">
                    Select from the given category
                  </h1>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="drug"
                      name="sort"
                      value="drug"
                      className="mr-1"
                      checked={checkboxValues.drug}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1">Drug/medical allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="food"
                      name="sort"
                      value="food"
                      className="mr-1"
                      checked={checkboxValues.food}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Food allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="latex"
                      name="sort"
                      value="latex"
                      className="mr-1"
                      checked={checkboxValues.latex}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Latex allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pollen"
                      name="sort"
                      value="pollen"
                      className="mr-1"
                      checked={checkboxValues.pollen}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Pollen allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pest"
                      name="sort"
                      value="pest"
                      className="mr-1"
                      checked={checkboxValues.pest}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Insect/Pest Allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="mold"
                      name="sort"
                      value="mold"
                      className="mr-1"
                      checked={checkboxValues.mold}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Mold allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="perfumes"
                      name="sort"
                      value="perfumes"
                      className="mr-1"
                      checked={checkboxValues.perfumes}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      Perfumes/household chemicals allergy
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="animal"
                      name="sort"
                      value="animal"
                      className="mr-1"
                      checked={checkboxValues.animal}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Pet/animal allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="dust"
                      name="sort"
                      value="dust"
                      className="mr-1"
                      checked={checkboxValues.dust}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Dust mites</span>
                  </label>
                </div>
              )}
            </div>
            {/* five */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Any hereditary conditions?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={handleHereditaryChange}
                value={hereditary}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {showHereditaryCheckboxes && (
                <div className="flex flex-col border mt-4 pl-4 rounded">
                  <h1 className="mb-2 mt-2 text-gray-600">
                    Select from the given category
                  </h1>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="heart"
                      name="sort"
                      value="heart"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.heart}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1">Heart condition</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="chest"
                      name="sort"
                      value="chest"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.chest}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Chest pain</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hbp"
                      name="sort"
                      value="hbp"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.hbp}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      {" "}
                      High Blood Pressure (HBP)
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pollenAllergy"
                      name="sort"
                      value="pollenAllergy"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.pollenAllergy}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Pollen allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="lbp"
                      name="sort"
                      value="lbp"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.lbp}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Low Blood Pressure (LBP)</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="tuberculosis"
                      name="sort"
                      value="tuberculosis"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.tuberculosis}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Tuberculosis</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="stroke"
                      name="sort"
                      value="stroke"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.stroke}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Stroke</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="diabetes"
                      name="sort"
                      value="diabetes"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.diabetes}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Diabetes</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="cancer"
                      name="sort"
                      value="cancer"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.cancer}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Cancer</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="asthma"
                      name="sort"
                      value="asthma"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.asthma}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      Asthma and other breathing conditions
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hiv"
                      name="sort"
                      value="hiv"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.hiv}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> HIV</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="aids"
                      name="sort"
                      value="aids"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.aids}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> AIDS</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="emphysema"
                      name="sort"
                      value="emphysema"
                      className="mr-1"
                      checked={hereditaryCheckboxValues.emphysema}
                      onChange={handleHereditaryCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Emphysema</span>
                  </label>
                </div>
              )}
            </div>
            {/* six */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Smoker?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setSmoker(e.target.value);
                  handleShowTextarea("question4", e);
                }}
                value={smoker}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {textareaVisibility.question4 && (
                <textarea
                  name=""
                  id="4"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                />
              )}
            </div>
            {/* seven */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Drinker?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setDrinker(e.target.value);
                  handleShowTextarea("question5", e);
                }}
                value={drinker}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {textareaVisibility.question5 && (
                <textarea
                  name=""
                  id="5"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                />
              )}
            </div>
            {/* eight */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Pregnant?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setPregnant(e.target.value);
                  handleShowTextarea("question6", e);
                }}
                value={pregnant}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {textareaVisibility.question6 && (
                <textarea
                  name=""
                  id="6"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                />
              )}
            </div>
            {/* nine */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Gained or lost 10kg in the last 6 Months?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={(e) => {
                  setWeightGain(e.target.value);
                  handleShowTextarea("question7", e);
                }}
                value={weightGain}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {textareaVisibility.question7 && (
                <textarea
                  name=""
                  id="7"
                  cols="30"
                  rows="5"
                  placeholder="Enter more details..."
                  className="border mt-3 rounded p-3"
                />
              )}
            </div>
            {/* ten */}
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Pre-existing conditions?
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={handlePreExistingChange}
                value={preExistingCondition}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {showPreExistingConditionCheckboxes && (
                <div className="flex flex-col border mt-4 pl-4 rounded">
                  <h1 className="mb-2 mt-2 text-gray-600">
                    Select from the given category
                  </h1>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="heartCondition"
                      name="sort"
                      value="heartCondition"
                      className="mr-1"
                      checked={
                        preExistingConditionCheckboxValues.heartCondition
                      }
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1">Heart condition</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="chestPain"
                      name="sort"
                      value="chestPain"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.chestPain}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Chest pain</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hbpressure"
                      name="sort"
                      value="hbpressure"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.hbpressure}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      {" "}
                      High Blood Pressure (HBP)
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pollenA"
                      name="sort"
                      value="pollenA"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.pollenA}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Pollen allergy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="lbpressure"
                      name="sort"
                      value="lbpressure"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.lbpressure}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Low Blood Pressure (LBP)</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="tuber"
                      name="sort"
                      value="tuber"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.tuber}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Tuberculosis</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="stk"
                      name="sort"
                      value="stk"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.stk}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Stroke</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="dib"
                      name="sort"
                      value="dib"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.dib}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Diabetes</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="can"
                      name="sort"
                      value="can"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.can}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Cancer</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="breathe"
                      name="sort"
                      value="breathe"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.breathe}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      Asthma and other breathing conditions
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hiv"
                      name="sort"
                      value="hiv"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.hiv}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> HIV</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="aids"
                      name="sort"
                      value="aids"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.aids}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> AIDS</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="emphysema"
                      name="sort"
                      value="emphysema"
                      className="mr-1"
                      checked={preExistingConditionCheckboxValues.emphysema}
                      onChange={handlePreExistingCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Emphysema</span>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-3 flex">
              <button
                className=" text-sky-600 border border-sky-600 mb-4 p-2 w-36 rounded ml-[250px]"
                onClick={props.onBack}
              >
                Back
              </button>
              <button
                className="bg-sky-600 text-white mb-4 p-2 w-36 rounded ml-3"
                onClick={props.onContinue}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
