import React, { useState, useEffect } from "react";
import "../Stylesheet/component.css";

const Summary = ({ data }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000); // Update every second

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`;
  console.log(data);

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));

    if (durationInDays >= 14) {
      const weeks = Math.floor(durationInDays / 7);
      return weeks > 1 ? `${weeks} weeks` : "1 week";
    } else if (durationInDays >= 7) {
      return "1 week";
    } else if (durationInDays > 0) {
      return `${durationInDays} days`;
    } else {
      return "0 days";
    }
  };

  return (
    <div className="summary">
      <div className="sum_head">
        <h2>Prescription ID: PD/06-0012</h2>
        <h2>
          <span>Dr. John Doe </span>{" "}
          <p>
            Bethel Care Centre <br />
            Resident Doctor In Charge <br />
            MD 25340{" "}
          </p>
        </h2>
      </div>
      <table className="details_head">
        <tr>
          <th>Patient ID: PTD-0083</th>
          <th>
            Name: <span>{data.patient.name}</span>
          </th>
          <th>
            Age: <span>{data.patient.age}yrs</span>
          </th>
          <th>
            Date: <span>{formattedDate}</span>
          </th>
        </tr>
      </table>

      <div className="sum_body">
        <div className="sum_side">
          <div className="cont">
            <h2>Chief Complainant</h2>
            <p>{data.patient.complaints}</p>
          </div>
          <div className="cont">
            <h2>Investigation</h2>
            <p>{data.patient.examinations}</p>
          </div>
          <div className="cont">
            <h2>diagnosis</h2>
            <p>{data.patient.diagnosis}</p>
          </div>
        </div>
        <div className="side_">
          <p>
            <span>mg or ml</span>
          </p>
          {data.drugs.map((drug, index) => (
            <div className="sum_details" key={index}>
              <h3>
                <p>{drug.med_name}</p>
                <p>
                  {drug.intakeQuantity}
                  {drug.intakeMeasurement}
                </p>
              </h3>
              <ul>
                <li>{drug.recommendedDosage} Tablets</li>
                <li>{drug.consumptionFrequency}</li>
                <li>
                  {drug.mealTiming === "before_meal"
                    ? "Before meal"
                    : "After meal"}
                </li>
                <li>{calculateDuration(drug.startDate, drug.endDate)}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="sum_details">Allowed: {data.instructions.allowed}</div>
    </div>
  );
};

export default Summary;
