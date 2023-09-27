import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";

export default function PatientSummary(props) {
  const { userData, submitData } = useContext(ContextApi);

  console.log("userData in PatientSummary:", userData);

  const {
    address,
    patientName,
    contactDetails,
    gender,
    age,
    bloodGroup,
    genotype,
    pulse,
    weight,
    height,
    systollic,
    diastollic,
    sugarLevel,
    temperature,
    insuranceProvider,
    insuranceNumber,
    hospitalized,
    iDoctorCare,
    medication,
    allergies,
    hereditary,
    smoker,
    drinker,
    pregnant,
    weightGain,
    preExistingCondition,
    dept,
    assignedPersonnel,
    appointmentFrequency,
    startDate,
    endDate,
    startTime,
    endTime,
    sessionType,
  } = userData;

  return (
    <div className="relative ml-[300px]">
      <div className="absolute  left-[80%]  mt-36 flex flex-col">
        <button className="bg-sky-500 text-white p-2 rounded">
          Create Appointment
        </button>
        <button className="border border-sky-500 text-sky-500 p-2 mt-3 rounded">
          Edit
        </button>
      </div>

      <div>
        <h1 className="text-sky-500 text-3xl ml-[50px] pt-24 font-bold ">
          Patient Summary
        </h1>
        <p className="ml-[70px] pt-10">
          Review all patient information before confirming entry.
        </p>
      </div>

      <div
        className="  h-[300px] w-[600px] ml-[50px]"
        // key={data.contactDetails}
      >
        <div className="h-[300px] overflow-y-auto mt-8">
          <h1 className="ml-[20px] font-bold mb-3">Patient Details</h1>
          <div className="border border-gray-400 rounded-md w-[550px] ml-[30px] p-3">
            <div>
              <h4 className="text-gray-400">Name: </h4>
              <p>{patientName}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Email address: </h4>
              <p>{contactDetails}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Phone number: </h4>
              <p>08123456789</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Residential address:</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Gender: </h4>
              <p>{gender}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Age : </h4>
              <p>{age}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Pulse: </h4>
              <p>{pulse}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Weight (kg):</h4>
              <p>{weight}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Height (cm):</h4>
              <p>{height}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Systolic/Diastolic (mmHg):</h4>
              <p>{systollic}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Sugar level (mg/dL):</h4>
              <p>{sugarLevel}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Temperature (oC):</h4>
              <p>{temperature}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Insurance provider :</h4>
              <p>{insuranceProvider}</p>
            </div>
            <div>
              <h4 className="text-gray-400 mt-4">Insurance number :</h4>
              <p>{insuranceNumber}</p>
            </div>
            <h1 className="ml-[30px] font-bold mb-3 mt-5">Medical History</h1>
            <div className="border border-gray-400 rounded-md w-[550px] ml-[30px] p-3">
              <div>
                <h4 className="text-gray-400">
                  Hospitalized, operated or serious illness in the past 3 years?
                </h4>
                <p>{hospitalized}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">
                  Under doctor’s care in the past 3 years?
                </h4>
                <p> {iDoctorCare}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">
                  Administered medication in the past 6 months?
                </h4>
                <p>{medication}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Any allergies?</h4>
                <p>{allergies}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">
                  Any hereditary conditions?
                </h4>
                <p>{hereditary}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Smoker?</h4>
                <p>{smoker}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Drinker?</h4>
                <p>{drinker}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Pregnant?</h4>
                <p>{pregnant}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">
                  Gained or lost 10kg in the last year?
                </h4>
                <p>{weight}</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">
                  Pre-existing conditions?{" "}
                </h4>
                <p>{preExistingCondition}</p>
              </div>
            </div>

            {/* <h1 className="ml-[30px] font-bold mb-3 mt-5">
              Appointment & Delegation
            </h1>
            <div className="border rounded-md w-[550px] mb-24 ml-[30px] p-3">
              <div>
                <h4 className="text-gray-400">Responsible department</h4>
                <p>Radiology</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Assigned personnel</h4>
                <p>Dr. Funke Quadri</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Appointment frequency</h4>
                <p>Biweekly</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Start date</h4>
                <p>October 10, 2023</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">End date</h4>
                <p>NOctober 31, 2023</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Start time</h4>
                <p>10:00 PM WAT</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">End time</h4>
                <p>10:00 PM WAT</p>
              </div>

              <div>
                <h4 className="text-gray-400 mt-4">Session type</h4>
                <p>In-person</p>
              </div> */}
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
              // onClick={props.onSubmit}
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
