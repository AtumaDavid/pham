import React, { useContext } from "react";
import ContextApi from "../context/ContextApi";

export default function PatientForm(props) {
  const { userData, setUserData } = useContext(ContextApi);

  const handleChange = (field, value) => {
    console.log(`Field: ${field}, Value: ${value}`);
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div>
      <div className="border border-gray-400 rounded w-[550px]  ml-[340px] mt-24 overflow-y-auto">
        <h1 className="text-xl font-bold ml-3 mt-4 text-gray-600">
          Patient Details
        </h1>

        <div className=" h-[350px] overflow-y-auto mt-8">
          <form className="pl-9 pr-9">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 ml-2">
                Patient Name{" "}
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                className="p-3 border text-black rounded"
                placeholder=" Enter Patient Name"
                onChange={(e) => handleChange("patientName", e.target.value)}
                value={userData["patientName"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Gender{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Select Patient Gender"
                onChange={(e) => handleChange("gender", e.target.value)}
                value={userData["gender"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Contact details <span className="ml-1">(phone or email)</span>{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter Contact Information"
                onChange={(e) => handleChange("contactDetails", e.target.value)}
                value={userData["contactDetails"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Residential address
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter Address"
                onChange={(e) => handleChange("address", e.target.value)}
                value={userData["address"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Age{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter age"
                onChange={(e) => handleChange("age", e.target.value)}
                value={userData["age"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="bloodGroup" className="mb-2 ml-2">
                Blood Group{" "}
              </label>

              <select
                name="bloodGroup"
                id="bloodGroup"
                onChange={(e) => handleChange("bloodGroup", e.target.value)}
                value={userData["bloodGroup"]}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="genotype" className="mb-2 ml-2">
                Genotype{" "}
              </label>
              <select
                name="genotype"
                id="genotype"
                onChange={(e) => handleChange("genotype", e.target.value)}
                value={userData["genotype"]}
              >
                <option disabled selected hidden>
                  Select answer
                </option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="AC">AC</option>
                <option value="SS">SS</option>
              </select>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Pulse{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter pulse"
                onChange={(e) => handleChange("pulse", e.target.value)}
                value={userData["pulse"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Weight <span className="ml-1">(kg)</span>
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter kg"
                onChange={(e) => handleChange("weight", e.target.value)}
                value={userData["weight"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Height <span className="ml-1">(cm)</span>{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter height"
                onChange={(e) => handleChange("height", e.target.value)}
                value={userData["height"]}
              />
            </div>

            <div className="flex mt-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 ml-2">
                  Systollic <span className="ml-1">(mmHg)</span>{" "}
                </label>
                <input
                  type="text"
                  className="p-3 w-[220px] border text-black rounded"
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("systollic", e.target.value)}
                  value={userData["systollic"]}
                />
              </div>
              <span className="text-lg m-2 mt-10">/</span>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 ml-2">
                  Diastolic <span className="ml-1">(mmHg)</span>
                </label>
                <input
                  type="text"
                  className="p-3 w-[220px] border text-black rounded"
                  placeholder=" Enter value"
                  onChange={(e) => handleChange("diastollic", e.target.value)}
                  value={userData["diastollic"]}
                />
              </div>
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Temperature{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter Value"
                onChange={(e) => handleChange("temperature", e.target.value)}
                value={userData["temperature"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Sugar level <span className="ml-1">(mg/dl) </span>
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter value"
                onChange={(e) => handleChange("sugarLevel", e.target.value)}
                value={userData["sugarLevel"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Insurance provider{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter insurance providers's name"
                onChange={(e) =>
                  handleChange("insuranceProvider", e.target.value)
                }
                value={userData["insuranceProvider"]}
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="mb-2 ml-2">
                Insurance Number{" "}
              </label>
              <input
                type="text"
                className="p-3 border text-black rounded"
                placeholder=" Enter insurance number"
                onChange={(e) =>
                  handleChange("insuranceNumber", e.target.value)
                }
                value={userData["insuranceNumber"]}
              />
            </div>

            <div className="mt-3">
              <button
                className="bg-sky-600 text-white p-2 w-36 rounded ml-[310px] mb-11"
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
