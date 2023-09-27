import React from "react";

export default function AppointmentStepBar({ currentStep }) {
  const stepIcons = [];
  return (
    <div className="pt-12 ml-[220px]">
      <div className="flex">
        <div>
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12" stroke="#009FE3" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="12"
                fill="#009FE3"
              >
                1
              </text>
            </svg>
            <h3 className="w-16">Patient Details</h3>
          </div>
          <p className="h-[1px] w-56 bg-gray-300 ml-6 mt-3 "></p>
        </div>

        <div>
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12" stroke="#009FE3" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="12"
                fill="#009FE3"
              >
                2
              </text>
            </svg>
            <h3 className="w-24 ">Appointment & Delegation</h3>
          </div>
          <p className="h-[1px] w-56 bg-gray-300 ml-6 mt-3"></p>
        </div>

        <div>
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12" stroke="#009FE3" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="12"
                fill="#009FE3"
              >
                3
              </text>
            </svg>
            <h3 className="w-24 ">Task Description</h3>
          </div>
          <p className="h-[1px] w-56 bg-gray-300 ml-6 mt-3 "></p>
        </div>

        <div>
          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12" stroke="#009FE3" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="12"
                fill="#009FE3"
              >
                4
              </text>
            </svg>
            <h3 className="w-16">Summary</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
