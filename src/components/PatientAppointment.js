import React, { useContext, useState } from "react";
import ContextApi from "../context/ContextApi";

export default function PatientAppointment(props) {
  const { userData, setUserData } = useContext(ContextApi);

  const handleChange = (field, value) => {
    console.log(`Field: ${field}, Value: ${value}`);
    setUserData({ ...userData, [field]: value });
  };

  const [dept, setDept] = useState("");

  const [responsibleDepartment, setResponsibleDepartment] = useState({
    accident: false,
    surgery: false,
    outpatient: false,
    intensivecare: false,
    cardiology: false,
    neurology: false,
    psychiatry: false,
    radiology: false,
    medicallab: false,
    pharmacy: false,
    rehabiilitation: false,
    ent: false,
    geriatric: false,
    gastroenterology: false,
    hematology: false,
    pediatrics: false,
    oncology: false,
    ophthalmology: false,
    urology: false,
    orthopedic: false,
    nursing: false,
    nutrition: false,
  });

  const [showDeptCheckbox, setShowDeptCheckBox] = useState(false);

  const updateUserDataWithCheckboxes = () => {
    const updatedUserData = {
      ...userData,
      resDept: {
        accident: responsibleDepartment.accident,
        surgery: responsibleDepartment.surgery,
        outpatient: responsibleDepartment.outpatient,
        intensivecare: responsibleDepartment.intensivecare,
        cardiology: responsibleDepartment.cardiology,
        neurology: responsibleDepartment.neurology,
        psychiatry: responsibleDepartment.psychiatry,
        radiology: responsibleDepartment.radiology,
        medicallab: responsibleDepartment.medicallab,
        pharmacy: responsibleDepartment.pharmacy,
        rehabiilitation: responsibleDepartment.rehabiilitation,
        ent: responsibleDepartment.ent,
        geriatric: responsibleDepartment.geriatric,
        gastroenterology: responsibleDepartment.gastroenterology,
        hematology: responsibleDepartment.hematology,
        pediatrics: responsibleDepartment.pediatrics,
        oncology: responsibleDepartment.oncology,
        ophthalmology: responsibleDepartment.ophthalmology,
        urology: responsibleDepartment.urology,
        orthopedic: responsibleDepartment.orthopedic,
        nursing: responsibleDepartment.nursing,
        nutrition: responsibleDepartment.nutrition,
      },
    };
    setUserData(updatedUserData);
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setResponsibleDepartment({ ...responsibleDepartment, [id]: checked });
    updateUserDataWithCheckboxes();
  };

  const handleResponsibleDepChange = (e) => {
    const selectedValue = e.target.value;
    setDept(selectedValue);
    setShowDeptCheckBox(selectedValue === "Yes");
    console.log("showDeptCheckbox:", showDeptCheckbox);
  };

  return (
    <div>
      <div className="border border-gray-400 rounded w-[550px] ml-[340px] mt-24">
        <h1 className="text-xl font-bold ml-3 mt-4 text-gray-600">
          Appointment & Delegation
        </h1>

        <div className="h-[350px] overflow-y-auto mt-8">
          <form className="pl-9 pr-9">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 ml-2">
                Responsible department
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                onChange={handleResponsibleDepChange}
                value={dept}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {showDeptCheckbox && (
                <div className="flex flex-col border mt-4 pl-4 rounded">
                  <h1 className="mb-2 mt-2 text-gray-600">
                    Select from the given category
                  </h1>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="accident"
                      name="sort"
                      value="accident"
                      className="mr-1"
                      checked={responsibleDepartment.accident}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1">
                      Accident, Casualty and Emergency{" "}
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="surgery"
                      name="sort"
                      value="surgery"
                      className="mr-1"
                      checked={responsibleDepartment.surgery}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      Surgery (operating theater)
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="outpatient"
                      name="sort"
                      value="outpatient"
                      className="mr-1"
                      checked={responsibleDepartment.outpatient}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Outpatient</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="intensivecare"
                      name="sort"
                      value="intensivecare"
                      className="mr-1"
                      checked={responsibleDepartment.intensivecare}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">intensive care unit</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="cardiology"
                      name="sort"
                      value="cardiology"
                      className="mr-1"
                      checked={responsibleDepartment.cardiology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Cardiology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="neurology"
                      name="sort"
                      value="neurology"
                      className="mr-1"
                      checked={responsibleDepartment.neurology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Neurology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="psychiatry"
                      name="sort"
                      value="psychiatry"
                      className="mr-1"
                      checked={responsibleDepartment.psychiatry}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Psychiatry</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="radiology"
                      name="sort"
                      value="radiology"
                      className="mr-1"
                      checked={responsibleDepartment.radiology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Radiology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="medicallab"
                      name="sort"
                      value="medicallab"
                      className="mr-1"
                      checked={responsibleDepartment.medicallab}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Medical Laboratory</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pharmacy"
                      name="sort"
                      value="pharmacy"
                      className="mr-1"
                      checked={responsibleDepartment.pharmacy}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Pharmacy</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="rehabiilitation"
                      name="sort"
                      value="rehabiilitation"
                      className="mr-1"
                      checked={responsibleDepartment.rehabiilitation}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">
                      Rehabilitation and Therapy
                    </span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="ent"
                      name="sort"
                      value="ent"
                      className="mr-1"
                      checked={responsibleDepartment.ent}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> ENT section</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="geriatric"
                      name="sort"
                      value="geriatric"
                      className="mr-1"
                      checked={responsibleDepartment.geriatric}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Geriatric</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="gastroenterology"
                      name="sort"
                      value="gastroenterology"
                      className="mr-1"
                      checked={responsibleDepartment.gastroenterology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Gastroenterology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="hematology"
                      name="sort"
                      value="hematology"
                      className="mr-1"
                      checked={responsibleDepartment.hematology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Hematology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="pediatrics"
                      name="sort"
                      value="pediatrics"
                      className="mr-1"
                      checked={responsibleDepartment.pediatrics}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Pediatrics</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="oncology"
                      name="sort"
                      value="oncology"
                      className="mr-1"
                      checked={responsibleDepartment.oncology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Oncology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="ophthalmology"
                      name="sort"
                      value="ophthalmology"
                      className="mr-1"
                      checked={responsibleDepartment.ophthalmology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Ophthalmology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="urology"
                      name="sort"
                      value="urology"
                      className="mr-1"
                      checked={responsibleDepartment.urology}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Urology</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="orthopedic"
                      name="sort"
                      value="orthopedic"
                      className="mr-1"
                      checked={responsibleDepartment.orthopedic}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Orthopedic</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="nursing"
                      name="sort"
                      value="nursing"
                      className="mr-1"
                      checked={responsibleDepartment.nursing}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2"> Nursing</span>
                  </label>

                  <label className="mr-2 flex items-center">
                    <input
                      type="checkbox"
                      id="nutrition"
                      name="sort"
                      value="nutrition"
                      className="mr-1"
                      checked={responsibleDepartment.nutrition}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-1 mt-2">Nutrition and Dietetics</span>
                  </label>
                </div>
              )}
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Assigned personnel
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                name="assignedPersonnel"
                id="assignedPersonnel"
                onChange={(e) =>
                  handleChange("assignedPersonnel", e.target.value)
                }
                value={userData["assignedPersonnel"]}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
              </select>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Appointment frequency
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                name="appointmentFrequency"
                id="appointmentFrequency"
                onChange={(e) =>
                  handleChange("appointmentFrequency", e.target.value)
                }
                value={userData["appointmentFrequency"]}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
              </select>
            </div>

            <div className="flex mt-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 ml-2">
                  Start Date
                </label>
                <input
                  type="date"
                  className="p-3 border w-[223px] text-gray-400 focus:text-black  "
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("startDate", e.target.value)}
                  value={userData["startDate"]}
                />
              </div>

              <div className="flex flex-col ml-4">
                <label htmlFor="name" className="mb-2 ml-2">
                  End Date
                </label>
                <input
                  type="date"
                  className="p-3 w-[222px]  border text-gray-400 focus:text-black "
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("endDate", e.target.value)}
                  value={userData["endDate"]}
                />
              </div>
            </div>

            <div className="flex mt-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 ml-2">
                  Start Time
                </label>
                <input
                  type="time"
                  className="p-3 border w-[223px] text-gray-500 rounded"
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("startTime", e.target.value)}
                  value={userData["startTime"]}
                />
              </div>

              <div className="flex flex-col ml-4">
                <label htmlFor="name" className="mb-2 ml-2">
                  End Time
                </label>
                <input
                  type="time"
                  className="p-3 w-[222px] border text-gray-500 rounded"
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("endTime", e.target.value)}
                  value={userData["endTime"]}
                />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 ml-2">
                Session type
              </label>
              <select
                className="p-3 border rounded text-gray-500 focus:text-black"
                name="sessionType"
                id="sessionType"
                onChange={(e) => handleChange("sessionType", e.target.value)}
                value={userData["sessionType"]}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
              </select>
            </div>

            <div className="mt-3 flex">
              <button
                className="border-sky-600 border text-sky-500 mb-4 p-2 w-36 rounded ml-[250px]"
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
