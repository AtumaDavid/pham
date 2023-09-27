import React from "react";
import "../Stylesheet/forms.css";

const NewDocument = () => {
  return (
    <section className="font-euclid-circular-a w-full pr-2">
      <h2 className="mb-5 text-zinc-600 text-opacity-80 text-xl font-semibold leading-7 tracking-wide">
        Add document
      </h2>
      <form className="appt_form">
        <label htmlFor="document_title">Title of Document</label>
        <input
          className="titleInput"
          type="text"
          id="title"
          name="title"
          placeholder="Enter document title"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="h-[118px]"
          placeholder="Enter a description..."
        />
        <label htmlFor="upload_file">Upload Document</label>
        <div className="w-[640px] h-[52px] flex gap-6 bg-white rounded-lg border border-gray-200 items-center">
          <label htmlFor="upload_file">
            <div className="border-2 rounded-2xl flex p-2 items-center mb-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <g clip-path="url(#clip0_368_4721)">
                  <path
                    d="M9.625 4.125V2.29167C9.625 2.04855 9.52842 1.81539 9.35651 1.64349C9.18461 1.47158 8.95145 1.375 8.70833 1.375H2.29167C2.04855 1.375 1.81539 1.47158 1.64349 1.64349C1.47158 1.81539 1.375 2.04855 1.375 2.29167V4.125"
                    stroke="black"
                    stroke-opacity="0.37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.20703 6.4165L5.4987 4.12484L7.79036 6.4165"
                    stroke="black"
                    stroke-opacity="0.37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 4.125V9.625"
                    stroke="black"
                    stroke-opacity="0.37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_368_4721">
                    <rect
                      width="11"
                      height="11"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </label>
          <p className="text-neutral-400 text-base font-semibold tracking-tight">
            Upload document here
          </p>
          <input type="file" id="upload_file" className="hidden" name="file" />
        </div>
        <div className="flex justify-end mt-3">
          <button className="document_button">Continue</button>
        </div>
      </form>
    </section>
  );
};

export default NewDocument;
