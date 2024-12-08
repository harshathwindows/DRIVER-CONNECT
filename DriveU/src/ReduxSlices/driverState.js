import { createSlice } from "@reduxjs/toolkit";


const initialState={
    driver:{
        name: '',
        email:'',
        phone: '',
        user: '',
        password: '',
        address: '',
        license: '',
    }
}

export const driverSlice=createSlice({
    name:"driver",
    initialState,
    reducers:{
        setDriver:(state,action)=>{
            const{key,value}=action.payload;
            state.driver[key]=value
        }
    }
})

export const {setDriver}=driverSlice.actions;
export default driverSlice.reducer

