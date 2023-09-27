import { useState } from "react";

const useDrug = () => {
    const [drugs, setDrugs] = useState([]);
    const [currentDrug, setCurrentDrug] = useState({
      name: "",
      description: "",
      startDate: null,
      endDate: null,
      recommendedDosage: "",
      intakeQuantity: "",
      intakeMeasurement: "",
      consumptionFrequency: "",
      mealTiming: "",
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCurrentDrug((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSaveDrug = () => {
      setDrugs((prevDrugs) => [...prevDrugs, currentDrug]);
      setCurrentDrug({
        name: "",
        description: "",
        startDate: null,
        endDate: null,
        recommendedDosage: "",
        intakeQuantity: "",
        intakeMeasurement: "",
        consumptionFrequency: "",
        mealTiming: "",
      });}
  
  

  return {
    drugs,
    setDrugs,
    currentDrug,
    setCurrentDrug,
    handleInputChange,
    handleSaveDrug,
  };
};

export default useDrug;
