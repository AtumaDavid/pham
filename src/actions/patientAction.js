import { UPDATE_PATIENT_DATA} from"../actionTypes/actionTypes";




  const updatePatientData = (data) => ({
    type: UPDATE_PATIENT_DATA,
    payload: data,
  });
  
 
  export{updatePatientData}