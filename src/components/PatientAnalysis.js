import React from "react";
import ChangeFlow from "../images/changeFlow.svg";

const PatientAnalysis = () => {
  const Details = [
    {
      id: 1,
      title: "Weight",
      value: "76kg",
      difference: "+3%",
    },
    {
      id: 2,
      title: "Height",
      value: "125cm",
      difference: "Unchanged",
    },
    {
      id: 3,
      title: "Temperature",
      value: <span>26&deg;C</span>,
      difference: "-3%",
    },
    {
      id: 4,
      title: "Pulse",
      value: "76bpm",
      difference: "+3%",
    },
    {
      id: 5,
      title: "Systollic",
      value: "125mmHg",
      difference: "+3%",
    },
    {
      id: 6,
      title: "Diastollic",
      value: "125mmHg",
      difference: "+3%",
    },
    {
      id: 7,
      title: "Sugar level",
      value: "26mg/dL",
      difference: "+3%",
    },
  ];

  return (
    <section className="w-full font-euclid-circular-a pr-12">
      <div className="flex justify-end items-center gap-4 w-[650px]">
        <div className="flex items-center p-4 gap-4 w-[239px] h-[35px] bg-gray-100 rounded-[10px] border border-sky-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 22.9168C17.5228 22.9168 22 18.2531 22 12.5002C22 6.7472 17.5228 2.0835 12 2.0835C6.47715 2.0835 2 6.7472 2 12.5002C2 18.2531 6.47715 22.9168 12 22.9168Z"
              stroke="#B1B1B4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6.25V12.5L16 14.5833"
              stroke="#B1B1B4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Jan 2022-Dec 2022</span>
        </div>

        <div className="rounded-[10px] border border-sky-500 w-[47px] h-[35px] text-center pt-1">
          <p>1 M</p>
        </div>

        <div className="rounded-[10px] border border-sky-500 w-[47px] h-[35px] text-center pt-1">
          <p>3 M</p>
        </div>

        <div className="rounded-[10px] border border-sky-500 w-[47px] h-[35px] text-center pt-1">
          <p>6 M</p>
        </div>

        <div className="bg-gray-100 rounded-[10px] border border-sky-500 w-[47px] h-[35px] text-center pt-1">
          <p>1 Y</p>
        </div>
      </div>

      {Details.map((detail) => (
        <div
          key={detail.id}
          className="w-[648px] h-[190px] rounded-[10px] shadow border border-sky-500 flex flex-col items-start mt-4 gap-5 p-4"
        >
          <div className=" w-[100%] flex justify-between items-center">
            <p className="text-zinc-700 text-opacity-80 text-base font-semibold">
              {detail.title}
            </p>
            <p className="text-slate-600 text-sm font-normal">
              {detail.difference}
            </p>
          </div>
          <p className="text-zinc-800 text-opacity-80 text-2xl font-semibold">
            {detail.value}
          </p>
          <img src={ChangeFlow} alt="" className="object-fill p-0 m-0" />
        </div>
      ))}
    </section>
  );
};

export default PatientAnalysis;
