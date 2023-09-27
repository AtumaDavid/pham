import React, { useState } from "react";
import Star from "../images/star.svg";
import InvoiceView from "./InvoiceView";

const PatientBilling = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
  };

  const closeView = () => {
    setView(false);
  };

  const Invoices = [
    {
      id: 1,
      title: "PD/06-0012",
      state: "Paid",
      department: "Pharmacy",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 2,
      title: "PD/06-0013",
      state: "Unpaid",
      department: "Radiology",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 3,
      title: "PD/06-0045",
      state: "Unpaid",
      department: "Diagnostics",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 4,
      title: "PD/06-0056",
      state: "Paid",
      department: "Therapy",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
  ];

  return (
    <section className="w-full font-euclid-circular-a pr-12">
      <div className="flex justify-between items-center gap-8 ">
        <div className="w-[220px] h-0 border  border-stone-600 border-opacity-50" />
        <p className="text-stone-600 text-opacity-50 text-sm font-normal leading-[21px]">
          All invoices
        </p>
        <div className="w-[220px] h-0 border  border-stone-600 border-opacity-50" />
      </div>

      {/* Cards */}
      {Invoices.map((item) => (
        <div
          key={item.id}
          className="border-4 border-l-sky-500 border-t-0 border-b-0 border-r-0 pl-5 pt-3 mb-3"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-gray-600 text-lg font-semibold leading-7">
              {item.title}
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={Star} alt="star icon" />
                <p className="text-gray-600 text-sm font-semibold leading-tight">
                  {item.state}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx="2" cy="2" r="2" fill="#4B5B65" />
                </svg>
                <p>{item.department}</p>
              </div>

              <div
                onClick={handleView}
                className="flex justify-center items-center gap-4 cursor-pointer"
              >
                <div className="flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                      stroke="#4B4B4B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>View</p>
                </div>

                <div className="flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                  >
                    <path
                      d="M18.8333 5.8V4.84C18.8333 3.49587 18.8333 2.82381 18.5427 2.31042C18.287 1.85883 17.8791 1.49168 17.3773 1.26158C16.8069 1 16.0601 1 14.5667 1H12.4333C10.9399 1 10.1931 1 9.62269 1.26158C9.12093 1.49168 8.71298 1.85883 8.45732 2.31042C8.16667 2.82381 8.16667 3.49587 8.16667 4.84V5.8M10.8333 12.4V18.4M16.1667 12.4V18.4M1.5 5.8H25.5M22.8333 5.8V19.24C22.8333 21.2562 22.8333 22.2643 22.3974 23.0344C22.0139 23.7118 21.4019 24.2625 20.6493 24.6076C19.7936 25 18.6735 25 16.4333 25H10.5667C8.32646 25 7.20635 25 6.35071 24.6076C5.59806 24.2625 4.98613 23.7118 4.60264 23.0344C4.16667 22.2643 4.16667 21.2562 4.16667 19.24V5.8"
                      stroke="#4B4B4B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <p>{item.createdAt}</p>
          </div>
        </div>
      ))}

      {view && <InvoiceView onClose={closeView} />}
    </section>
  );
};

export default PatientBilling;
