import React from "react";
 
import "../Stylesheet/activities.css";
 
const PatientActivities = () => {
  return (
    <div className="activities">
      <div className="header_act">
        <h2>Recent Activities</h2> <p>View All</p>
      </div>
      <div className="relative">
        <div className="w-[936px] h-[355px] flex-shrink-0 ">
          <div className="no_data_body">
            <h2>You have no previous patients</h2>{" "}
            <p>
              Create a new patient through the Patients manager dropdown <br />{" "}
              <span>Go to Patients manager Add new patient.</span>{" "}
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="w-[299px] h-[245px] flex-shrink-0 rounded-full bg-gray-100    absolute bottom-[180px] left-[65%]"></div>
          <div className="w-[228px] h-[232px] transform rotate-[-9.049] flex-shrink-0 absolute bottom-[120px] left-[65%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="255"
              viewBox="0 0 265 255"
              fill="none"
            >
              <rect
                x="0.954104"
                y="1.02416"
                width="147.408"
                height="171.567"
                rx="7"
                transform="matrix(1.00665 0.0360836 -0.0525469 0.988079 86.902 57.4246)"
                fill="#EEEEEE"
                stroke="#999999"
                stroke-width="2"
              />
              <rect
                x="-1.15254"
                y="-0.879926"
                width="152.127"
                height="174.367"
                rx="9"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 4.3182 50.5164)"
                fill="#FAFAFA"
                stroke="#999999"
                stroke-width="2"
              />
              <path
                d="M5.45223 58.5504C4.75266 54.1879 7.74653 50.2665 12.1392 49.7917L145.489 35.3785C149.882 34.9037 154.01 38.0553 154.71 42.4179L159.72 73.6632L10.4627 89.7958L5.45223 58.5504Z"
                fill="#EEEEEE"
              />
              <rect
                width="5.17102"
                height="20.8509"
                rx="2.58551"
                transform="matrix(0.158335 0.987385 -0.994209 0.10746 185.902 39.6675)"
                fill="#999999"
              />
              <rect
                width="6.25528"
                height="17.2367"
                rx="3"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 128.62 11.2305)"
                fill="#999999"
              />
              <rect
                width="5.73882"
                height="19.1294"
                rx="2.86941"
                transform="matrix(0.867163 0.546285 -0.665397 0.711932 165.371 15.915)"
                fill="#999999"
              />
              <rect
                width="120.936"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 26.0654 95.0352)"
                fill="#DCDCDC"
              />
              <rect
                width="120.936"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 31.5244 129.074)"
                fill="#DCDCDC"
              />
              <rect
                width="120.936"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 36.9824 163.112)"
                fill="#DCDCDC"
              />
              <rect
                width="43.787"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 28.249 108.651)"
                fill="#EEEEEE"
              />
              <rect
                width="43.787"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 33.707 142.689)"
                fill="#EEEEEE"
              />
              <rect
                width="43.787"
                height="6.8947"
                rx="2"
                transform="matrix(0.994209 -0.10746 0.158335 0.987385 39.165 176.728)"
                fill="#EEEEEE"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientActivities;
