// import { createStore } from 'redux';

// // Define an initial state
// const initialState = {
//     formData: {
//         name:"",
//         age:"",
//         date: "",
//         complaints: "",
//         examination: "",
//         diagnosis: "",
//         med_name: "",
//         recommendedDosage: "",
//         consumptionFrequency: "",
//         mealTiming: "",
//     // ... other form fields
//     },
// };

// // Define a reducer
// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'UPDATE_FORM_DATA':
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           [action.field]: action.value,
//         },
//       };
//     default:
//       return state;
//   }
// };

// // Create the Redux store
// const store = createStore(formReducer);

// export default store;
