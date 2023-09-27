import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dropdown = (props) => {
    const index = props.data
    const drugs = props.drugsData
    const setDrugs= props.setDrugsData
    const currentDrug = props.curr
    const setCurrentDrug = props.setCurr
    const setDrugIndex = props.setindex
    const setEditingMode = props.setedit
    // const [drugs, setDrugs] = useState([]);

    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
    const handleDeleteDrug = (data) => {
        const updatedDrugs = drugs.filter((_, i) => i !== data);
        // alert(data)
        setDrugs(updatedDrugs);
    };
    // const handleEditDrug = (data) => {
    //     const updatedDrugs = drugs.map((drug, i) =>
    //       i === data ? { ...drug, editing: !drug.editing } : drug
    //     );
    //     setDrugs(updatedDrugs);
    //   };
    const handleEditDrug = (index) => {
      setDrugIndex(index); // Set the index of the drug being edited
      setCurrentDrug(drugs[index]); // Set the current drug for editing
      setEditingMode(true);
      setShowDropdown(false);
      
    };
  
    

    return ( 
        <div className="td_btn dropdown-container">
            <button onClick={toggleDropdown} className="dot-button">
            <BsThreeDotsVertical />
            </button>
            {showDropdown && (
            <div
                ref={dropdownRef}
                className="dropdown-content show-dropdown"
            >
                <button onClick={() => handleEditDrug(index)}>
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path
                    d="M2 13.9999H4.5L11.8733 6.62659L9.37333 4.12659L2 11.4999V13.9999ZM3.33333 12.0533L9.37333 6.01325L9.98667 6.62659L3.94667 12.6666H3.33333V12.0533ZM12.2467 2.19325C12.185 2.13145 12.1117 2.08242 12.0311 2.04897C11.9504 2.01551 11.864 1.99829 11.7767 1.99829C11.6894 1.99829 11.6029 2.01551 11.5223 2.04897C11.4416 2.08242 11.3683 2.13145 11.3067 2.19325L10.0867 3.41325L12.5867 5.91325L13.8067 4.69325C13.8685 4.63158 13.9175 4.55832 13.951 4.47767C13.9844 4.39702 14.0016 4.31057 14.0016 4.22325C14.0016 4.13594 13.9844 4.04949 13.951 3.96884C13.9175 3.88819 13.8685 3.81493 13.8067 3.75325L12.2467 2.19325Z"
                    fill="#049561"
                    />
                </svg>{" "}
                <span></span> Edit details
                </button>
                <button onClick={() => handleDeleteDrug(index)}>
                {" "}
                <span>
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
                    </svg>
                </span>
                Delete
                </button>
            </div>
            )}
        </div>
     );
}
 
export default Dropdown;