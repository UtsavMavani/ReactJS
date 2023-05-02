// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers";

// 1st method : Deprecated
// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// 2nd method
const store = configureStore({
    reducer: rootReducer
});

export default store;