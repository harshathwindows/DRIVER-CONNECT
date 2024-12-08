import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./ReduxSlices/customerState";
import logCusReducer from "./ReduxSlices/customerLogin"
import hireReducer  from "./ReduxSlices/hireData";
import  cusData  from "./ReduxSlices/customerData";
import driverReducer from "./ReduxSlices/driverState";
import drData from "./ReduxSlices/driverData";
import jobReducer from "./ReduxSlices/jobPost";

const store=configureStore({
    reducer:{
        customerInfo:customerReducer,
        loginCustomer:logCusReducer,
        hireReq:hireReducer,
        userData:cusData,
        driverInfo:driverReducer,
        driverData:drData,
        jobData:jobReducer,
    },
})

export default store;
