import React, { useState } from "react";
import Calendar from "../images/calendar2.svg";
import "../Stylesheet/forms.css";
import DocumentView from "./DocumentView";

const DocumentDetails = ({ onClose }) => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
  };

  const closeView = () => {
    setView(false);
  };

  return (
    <section className=" bg-black bg-opacity-25 w-[100%] h-[100%] font-euclid-circular-a fixed top-0 right-0 flex-col justify-start items-start">
      <div className="p-8 gap-8 bg-white h-[600px] w-[800px] fixed top-[7%] right-[17%]">
        <div className="flex justify-end gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4L12 14.01L9 11.01"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 3.99998H6.8C5.11984 3.99998 4.27976 3.99998 3.63803 4.32696C3.07354 4.61458 2.6146 5.07353 2.32698 5.63801C2 6.27975 2 7.11983 2 8.79998V17.2C2 18.8801 2 19.7202 2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673C4.27976 22 5.11984 22 6.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9264 19.673 20.362C20 19.7202 20 18.8801 20 17.2V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
              stroke="#4B4B4B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
          >
            <path
              d="M18.3333 5.4V4.52C18.3333 3.28788 18.3333 2.67183 18.0427 2.20122C17.787 1.78726 17.3791 1.45071 16.8773 1.23979C16.3069 1 15.5601 1 14.0667 1H11.9333C10.4399 1 9.69312 1 9.12269 1.23979C8.62093 1.45071 8.21298 1.78726 7.95732 2.20122C7.66667 2.67183 7.66667 3.28788 7.66667 4.52V5.4M10.3333 11.45V16.95M15.6667 11.45V16.95M1 5.4H25M22.3333 5.4V17.72C22.3333 19.5682 22.3333 20.4923 21.8974 21.1982C21.5139 21.8191 20.9019 22.3239 20.1493 22.6403C19.2936 23 18.1735 23 15.9333 23H10.0667C7.82646 23 6.70635 23 5.85071 22.6403C5.09806 22.3239 4.48613 21.8191 4.10264 21.1982C3.66667 20.4923 3.66667 19.5682 3.66667 17.72V5.4"
              stroke="#4B4B4B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={onClose}
          >
            <path
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="ml-4 mt-8 flex gap-10 items-center note_title">
          <div className="w-3.5 h-3.5 bg-sky-500 rounded-[5px]" />
          <p className="text-black text-[32px] font-semibold">Leg Scan</p>
        </div>

        <div className="ml-3 mt-8 flex gap-8 items-center">
          <img src={Calendar} alt="calendar icon" />
          <span>Thursday July 20, 2023</span>
        </div>

        <div className="flex flex-col gap-5 mt-8 ml-[10%]">
          <p className="text-md font-semibold leading-tight">Description</p>
          <p className="leading-9">
            The leg scan was taken at Intuit Diagnostics and shows the antrior
            ligament muscle <br />
            has torn at angle of 45&deg;
          </p>
        </div>

        <div className="flex justify-between items-center ml-[10%] mt-10">
          <button
            className="w-[165px] h-[42px] px-5 pt-1 pb-[3px] bg-sky-500 rounded-[10px] justify-center items-center inline-flex text-white cursor pointer"
            onClick={handleView}
          >
            View document
          </button>

          <div class="w-[128px] h-[45px] pl-[9px] mr-10 pr-[11.50px] pt-0.5 pb-[3px] bg-slate-200 rounded-3xl border border-gray-300 justify-center items-center gap-[4.50px] inline-flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75"
                stroke="#110C4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75"
                stroke="black"
                stroke-opacity="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.08203 5.8335L6.9987 8.75016L9.91536 5.8335"
                stroke="#110C4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.08203 5.8335L6.9987 8.75016L9.91536 5.8335"
                stroke="black"
                stroke-opacity="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 8.75V1.75"
                stroke="#110C4A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 8.75V1.75"
                stroke="black"
                stroke-opacity="0.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="text-sky-950 font-normal leading-tight">Download</div>
          </div>
        </div>
      </div>

      {view && <DocumentView onClose={closeView} />}
    </section>
  );
};

export default DocumentDetails;
