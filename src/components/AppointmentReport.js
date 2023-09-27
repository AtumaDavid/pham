import React from "react";
import { useNavigate } from "react-router";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AppointmentReport = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const handlePatientInfo = () => {
    console.log("clicked");
    navigate("/pinfo");
  };

  const [report, setReport] = useState([
    {
      id: 1,
      tag: "#657899832",
      date: "12 April 2023, 12:43 AM",
      patient: "Okinda Peters",
      activity: "12 April 2023, 12:43 AM",
      status: "Pending",
      isOpen: false,
    },
    {
      id: 2,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 3,
      tag: "#657899832",
      date: "12 April 2023, 12:43 AM",
      patient: "Okinda Peters",
      activity: "12 April 2023, 12:43 AM",
      status: "Pending",
      isOpen: false,
    },
    {
      id: 4,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 5,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 6,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 7,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 8,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 9,
      tag: "#657899832",
      date: "12 April 2023, 12:43 AM",
      patient: "Okinda Peters",
      activity: "12 April 2023, 12:43 AM",
      status: "Pending",
      isOpen: false,
    },
    {
      id: 10,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 11,
      tag: "#657899832",
      date: "12 April 2023, 12:43 AM",
      patient: "Okinda Peters",
      activity: "12 April 2023, 12:43 AM",
      status: "Pending",
      isOpen: false,
    },
    {
      id: 12,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 13,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 14,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 15,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 16,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 17,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
    {
      id: 18,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 19,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Expired",
      isOpen: false,
    },
    {
      id: 20,
      tag: "#787754567",
      date: "12 April 2023, 12:43 AM",
      patient: "James Oshiomole",
      activity: "12 April 2023, 12:43 AM",
      status: "Dispensed",
      isOpen: false,
    },
  ]);

  const filteredItems = report
    .filter((item) => {
      if (filter === "all") {
        return true;
      } else {
        return item.status === filter;
      }
    })
    .slice(0, 9);

  // const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (itemId) => {
    setReport((prevReport) =>
      prevReport.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        }
        return {
          ...item,
          isOpen: false, // Close dropdown for other items
        };
      })
    );
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReport((prevReport) =>
          prevReport.map((item) => ({
            ...item,
            isOpen: false,
          }))
        );
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="report">
      <div className="report_header">
        <div className="button">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Appointments
          </button>
          <button
            className={filter === "Dispensed" ? "active" : ""}
            onClick={() => setFilter("Dispensed")}
          >
            Upcoming Appointments
          </button>
          <button
            className={filter === "Expired" ? "active" : ""}
            onClick={() => setFilter("Expired")}
          >
          Completed Appointments
          </button>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7H21"
              stroke="#009FE3"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6 12H18"
              stroke="#009FE3"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M10 17H14"
              stroke="#009FE3"
              stroke-width="1.5"
              stroke-inecap="round"
            />
          </svg>
          Filter
        </button>
      </div>

      <div className="report_table">
        <table>
          <thead>
            <tr>
              <th className="tag_1">
                <input type="checkbox" name="Prescription ID" id="pre_id" />{" "}
                <span>Appointment ID</span>
              </th>
              <th>Date </th>
              <th>Patient Name</th>
              <th>Last Activity</th>
              <th className="status_head">
                <span>Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr className={`${item.status}`} key={item.id}>
                <td>
                  {" "}
                  <span className="tag">
                    <input type="checkbox" name="Prescription ID" id="pre_id" />
                    {item.tag}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>{item.patient}</td>
                <td>{item.activity}</td>
                <td className="status">
                  <span className={`stats ${item.status}`}>{item.status}</span>
                </td>
                <td>
                  <div ref={dropdownRef} className="dot">
                    <button onClick={() => toggleDropdown(item.id)}>
                      <span>
                        <HiOutlineDotsVertical />
                      </span>
                    </button>
                    {item.isOpen && (
                      <div className="dot_body">
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 9.12L10.32 11.44C10.4667 11.5867 10.6533 11.66 10.88 11.66C11.1067 11.66 11.2933 11.5867 11.44 11.44C11.5867 11.2933 11.66 11.1067 11.66 10.88C11.66 10.6533 11.5867 10.4667 11.44 10.32L9.12 8L11.44 5.68C11.5867 5.53333 11.66 5.34667 11.66 5.12C11.66 4.89333 11.5867 4.70667 11.44 4.56C11.2933 4.41333 11.1067 4.34 10.88 4.34C10.6533 4.34 10.4667 4.41333 10.32 4.56L8 6.88L5.68 4.56C5.53333 4.41333 5.34667 4.34 5.12 4.34C4.89333 4.34 4.70667 4.41333 4.56 4.56C4.41333 4.70667 4.34 4.89333 4.34 5.12C4.34 5.34667 4.41333 5.53333 4.56 5.68L6.88 8L4.56 10.32C4.41333 10.4667 4.34 10.6533 4.34 10.88C4.34 11.1067 4.41333 11.2933 4.56 11.44C4.70667 11.5867 4.89333 11.66 5.12 11.66C5.34667 11.66 5.53333 11.5867 5.68 11.44L8 9.12ZM8 16C6.89333 16 5.85333 15.7899 4.88 15.3696C3.90667 14.9493 3.06 14.3795 2.34 13.66C1.62 12.94 1.05013 12.0933 0.6304 11.12C0.210667 10.1467 0.000533333 9.10667 0 8C0 6.89333 0.210133 5.85333 0.6304 4.88C1.05067 3.90667 1.62053 3.06 2.34 2.34C3.06 1.62 3.90667 1.05013 4.88 0.6304C5.85333 0.210667 6.89333 0.000533333 8 0C9.10667 0 10.1467 0.210133 11.12 0.6304C12.0933 1.05067 12.94 1.62053 13.66 2.34C14.38 3.06 14.9501 3.90667 15.3704 4.88C15.7907 5.85333 16.0005 6.89333 16 8C16 9.10667 15.7899 10.1467 15.3696 11.12C14.9493 12.0933 14.3795 12.94 13.66 13.66C12.94 14.38 12.0933 14.9501 11.12 15.3704C10.1467 15.7907 9.10667 16.0005 8 16ZM8 14.4C9.78667 14.4 11.3 13.78 12.54 12.54C13.78 11.3 14.4 9.78667 14.4 8C14.4 6.21333 13.78 4.7 12.54 3.46C11.3 2.22 9.78667 1.6 8 1.6C6.21333 1.6 4.7 2.22 3.46 3.46C2.22 4.7 1.6 6.21333 1.6 8C1.6 9.78667 2.22 11.3 3.46 12.54C4.7 13.78 6.21333 14.4 8 14.4Z"
                              fill="#AF290B"
                            />
                          </svg>{" "}
                          Delete
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.5 17.5H5.625L14.8417 8.28329L11.7167 5.15829L2.5 14.375V17.5ZM4.16667 15.0666L11.7167 7.51663L12.4833 8.28329L4.93333 15.8333H4.16667V15.0666ZM15.3083 2.74163C15.2312 2.66438 15.1397 2.60309 15.0389 2.56127C14.938 2.51945 14.83 2.49792 14.7208 2.49792C14.6117 2.49792 14.5036 2.51945 14.4028 2.56127C14.302 2.60309 14.2104 2.66438 14.1333 2.74163L12.6083 4.26663L15.7333 7.39163L17.2583 5.86663C17.3356 5.78953 17.3969 5.69796 17.4387 5.59715C17.4805 5.49634 17.502 5.38827 17.502 5.27913C17.502 5.16999 17.4805 5.06192 17.4387 4.96111C17.3969 4.8603 17.3356 4.76872 17.2583 4.69163L15.3083 2.74163Z"
                              fill="#4F4F4F"
                            />
                          </svg>
                          Edit
                        </p>
                        <p>
                          <Link to="/pinfo" onClick={handlePatientInfo} />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M7 14C5.61553 14 4.26216 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303298 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303298 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26216 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1C5.81332 1 4.65328 1.3519 3.66658 2.01119C2.67989 2.67047 1.91085 3.60755 1.45673 4.7039C1.0026 5.80026 0.88378 7.00666 1.11529 8.17054C1.3468 9.33443 1.91825 10.4035 2.75736 11.2426C3.59648 12.0818 4.66558 12.6532 5.82946 12.8847C6.99335 13.1162 8.19975 12.9974 9.2961 12.5433C10.3925 12.0892 11.3295 11.3201 11.9888 10.3334C12.6481 9.34673 13 8.18669 13 7C13 5.4087 12.3679 3.88258 11.2426 2.75736C10.1174 1.63214 8.5913 1 7 1Z"
                              fill="#4F4F4F"
                            />
                          </svg>{" "}
                          View Details
                        </p>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentReport;
