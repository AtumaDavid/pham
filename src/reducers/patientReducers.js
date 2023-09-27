// import { UPDATE_PATIENT_DATA} from"../actionTypes/actionTypes";





// const initialState = {
//     patientData: {},
//   };
  
//   const patientReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case UPDATE_PATIENT_DATA:
//         return {
//           ...state,
//           patientData: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default patientReducer;
  

// patientReducer.js




import { UPDATE_PATIENT_DATA} from"../actionTypes/actionTypes";
const initialState = {
  patientData: {}, // Initial empty patient data
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PATIENT_DATA:
      return {
        ...state,
        patientData: action.payload, // Update patient data in the store
      };
    default:
      return state;
  }
};

export default patientReducer;
