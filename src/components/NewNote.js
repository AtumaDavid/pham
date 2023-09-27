import React from "react";
import Calendar from "../images/calendar2.svg";
import "../Stylesheet/forms.css";

const NewNote = ({ onClose }) => {
  return (
    <section className=" font-euclid-circular-a w-[694px] h-[539px] fixed top-[10%] right-[20%] bg-white rounded-[10px] shadow flex-col justify-start items-start">
      <form className="p-8 flex flex-col justify-center gap-8 note_form">
        <div className="flex justify-end items-center gap-10">
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

        <div className="ml-4 flex gap-10 items-center note_title">
          <div className="w-3.5 h-3.5 bg-sky-500 rounded-[5px]" />
          <input type="text" id="title" name="title" placeholder="Note Title" />
        </div>

        <div className="ml-[9px] flex gap-10 items-center">
          <img src={Calendar} alt="calendar icon" />
          <span>Thursday July 20, 2023</span>
        </div>

        <textarea
          placeholder="Text here..."
          id="description"
          name="description"
        />
      </form>
    </section>
  );
};

export default NewNote;
