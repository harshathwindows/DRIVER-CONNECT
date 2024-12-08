import { createSlice } from "@reduxjs/toolkit"

const initialState={
    customerData: '',
}

export const cusData=createSlice({
    name:"customerData",
    initialState,
    reducers:{
        setCusData:(state,action)=>{
            state.customerData=action.payload
            
        }
    }
})
export const {setCusData}=cusData.actions
export default cusData.reducer