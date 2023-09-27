import React from "react";
import Summary from "../images/prescriptionSummary.png";

const PrescriptionView = ({ onClose }) => {
  return (
    <section className=" bg-black bg-opacity-25 w-[100%] h-[100%] font-euclid-circular-a fixed top-0 right-0 flex-col justify-start items-start">
      <div
        onClick={onClose}
        className="cursor-pointer relative w-[35px] h-[2.3rem] top-5 left-[84%] z-50 rounded-full bg-white flex items-center p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
        >
          <path
            d="M2.25 23.5L0.5 21.225L7.5 12.125L0.5 3.025L2.25 0.75L9.25 9.85L16.25 0.75L18 3.025L11 12.125L18 21.225L16.25 23.5L9.25 14.4L2.25 23.5Z"
            fill="black"
          />
        </svg>
      </div>

      <div className=" font-euclid-circular-a bg-white w-[760px] h-[585px] fixed top-[11%] right-[18%] shadow flex-col justify-start items-start p-4 overflow-auto">
        <img src={Summary} alt="Summary" />
      </div>
    </section>
  );
};

export default PrescriptionView;
