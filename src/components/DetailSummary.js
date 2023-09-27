import React from "react";
import "../Stylesheet/prescription.css";
import editIcon from "../images/editIcon.svg";

const DetailSummary = () => {
  return (
    <section className="font-euclid-circular-a mt-2">
      <div className="border border-gray-500 w-fit">
        <div className="detail_table">
          <h2 className="font-semibold">Patient Details</h2>
          <img src={editIcon} alt="" />
        </div>
        <div className="detail_table">
          <span>Gender</span>
          <span>Female</span>
        </div>
        <div className="detail_table">
          <span>Age</span>
          <span>21</span>
        </div>
        <div className="detail_table">
          <span>Phone Number</span>
          <span>08123435355</span>
        </div>
        <div className="detail_table">
          <span>Location</span>
          <span>Lagos, Nigeria</span>
        </div>
        <div className="detail_table">
          <span>Number of Visits</span>
          <span>3</span>
        </div>
        <div className="detail_table">
          <span>Value</span>
          <span>&#8358;120,000</span>
        </div>
        <div className="detail_table">
          <span>Intake date</span>
          <span>February 10, 2023</span>
        </div>
        <div className="detail_table">
          <span>Status</span>
          <span className="patient_status">Active</span>
        </div>
        <div className="detail_table">
          <span>Patient Summary</span>
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19 7.00001L19 1.00001M19 1.00001H13M19 1.00001L10 10M8 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V12"
                stroke="#4B4B4B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            View
          </span>
        </div>
      </div>

      <div className="mt-12 font-euclid-circular-a leading-7">
        <div className="next_appt">
          <div className="next_appt_items">
            <p className="text-zinc-800 text-opacity-80 text-lg font-semibold leading-7 tracking-wide">
              Next appointment
            </p>
            <img src={editIcon} alt="" />
          </div>
          <div className="next_appt_items">
            <p>February 10, 2023</p>
            <p>9:00 AM -10:00 AM</p>
          </div>
          <p>Radiology ward</p>
          <p>Dr. Salam Adekogbe</p>
        </div>
      </div>
    </section>
  );
};

export default DetailSummary;
