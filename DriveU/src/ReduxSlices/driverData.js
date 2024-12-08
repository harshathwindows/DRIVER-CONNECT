import { createSlice } from "@reduxjs/toolkit"

const initialState={
    driverData: '',
}

export const drData=createSlice({
    name:"driverData",
    initialState,
    reducers:{
        setDrData:(state,action)=>{
            state.driverData=action.payload
            
        }
    }
})
export const {setDrData}=drData.actions
export default drData.reducer