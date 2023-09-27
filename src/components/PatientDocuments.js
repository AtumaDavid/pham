import React, { useState } from "react";
import DeleteIcon from "../images/deleteIcon.svg";
import Star from "../images/star.svg";
import DocumentDetails from "./DocumentDetails";

const PatientDocuments = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(true);
  };

  const closeView = () => {
    setView(false);
  };

  const documents = [
    {
      id: 1,
      title: "Leg scan",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 2,
      title: "Police Report",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 3,
      title: "Medical Report",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 4,
      title: "Lab Test",
      icon: <img src={Star} alt="star icon" />,
      description: "Interrogatories",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
  ];

  return (
    <section className="w-full font-euclid-circular-a pr-12">
      <div className="flex justify-between items-center gap-10 ">
        <div className="w-[200px] h-0 border  border-stone-600 border-opacity-50" />
        <p className="text-stone-600 text-opacity-50 text-sm font-normal leading-[21px]">
          All documents
        </p>
        <div className="w-[200px] h-0 border  border-stone-600 border-opacity-50" />
      </div>

      {/* Cards */}
      {documents.map((item) => (
        <div
          key={item.id}
          className="border-4 border-l-sky-500 border-t-0 border-b-0 border-r-0 pl-5 pt-3 mb-3"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-600 text-lg font-semibold leading-7">
              {item.title}
            </h2>
            <div className="flex items-center gap-5 justify-between">
              <div className="flex gap-2">
                <span>{item.icon}</span>
                <p className="text-gray-600 text-sm font-semibold leading-tight">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z"
                      stroke="#4B4B4B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Edit</p>
                </div>

                <div
                  className="flex-col items-center cursor-pointer"
                  onClick={handleView}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M21.5 9.00001L21.5 3.00001M21.5 3.00001H15.5M21.5 3.00001L12.5 12M10.5 3H8.3C6.61984 3 5.77976 3 5.13803 3.32698C4.57354 3.6146 4.1146 4.07354 3.82698 4.63803C3.5 5.27976 3.5 6.11984 3.5 7.8V16.2C3.5 17.8802 3.5 18.7202 3.82698 19.362C4.1146 19.9265 4.57354 20.3854 5.13803 20.673C5.77976 21 6.61984 21 8.3 21H16.7C18.3802 21 19.2202 21 19.862 20.673C20.4265 20.3854 20.8854 19.9265 21.173 19.362C21.5 18.7202 21.5 17.8802 21.5 16.2V14"
                      stroke="#4B4B4B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>View</p>
                </div>

                <div className="flex-col">
                  <img src={DeleteIcon} alt="Trash icon" />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <p>{item.createdAt}</p>
          </div>
        </div>
      ))}

      {view && <DocumentDetails onClose={closeView} />}
    </section>
  );
};

export default PatientDocuments;
