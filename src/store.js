 

import { createStore, combineReducers } from 'redux';
import patientReducer from './reducers/patientReducers'; // Import your patient reducer (and any other reducers you might have)

// Combine multiple reducers if you have more than one
const rootReducer = combineReducers({
  patientData: patientReducer,
  // Add other reducers here if needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
