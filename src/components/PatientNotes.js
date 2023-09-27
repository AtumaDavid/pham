import React from "react";
import DeleteIcon from "../images/deleteIcon.svg";

const PatientNotes = () => {
  const Notes = [
    {
      id: 1,
      title: "Appointment",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 2,
      title: "Injury issues",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 3,
      title: "Ante natal",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
    {
      id: 4,
      title: "Surgery",
      createdAt: "Created on Monday 17 May, 2023 at 12:00 PM WAT",
    },
  ];

  return (
    <section className="w-full font-euclid-circular-a pr-12">
      <div className="flex justify-between items-center gap-14">
        <div className="w-[200px] h-0 border  border-stone-600 border-opacity-50" />
        <p className="text-stone-600 text-opacity-50 text-sm font-normal leading-[21px]">
          All Notes
        </p>
        <div className="w-[200px] h-0 border  border-stone-600 border-opacity-50" />
      </div>

      {/* Cards */}
      {Notes.map((note) => (
        <div
          key={note.id}
          className="border-4 border-l-sky-500 border-t-0 border-b-0 border-r-0 pl-5 pt-3 mb-3"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-600 text-lg font-semibold leading-7">
              {note.title}
            </h2>
            <div className="flex items-center gap-5 justify-end">
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
                <img src={DeleteIcon} alt="" />
                <p>Delete</p>
              </div>
            </div>
              <p>{note.createdAt}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PatientNotes;
