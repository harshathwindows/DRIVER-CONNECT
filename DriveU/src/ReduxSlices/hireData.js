import { createSlice } from "@reduxjs/toolkit"

const date={
 date:new Date().getDate(),
 year:new Date().getFullYear(),
 month:new Date().getMonth()+1,
}
const initialState={
    hire:{
        startlocation: '',
        endlocation: '',
        startdate: '',
        triptime: '',
        enddate: '',
        multiday: '',
        vehicletype: '',
        tripfare:'',
        triptype: '',
        cusID: '',
        post: `${date.date}-${date.month}-${date.year}`,
    }
}

export const hireSlice=createSlice({
    name: "hire",
    initialState,
    reducers:{
        setHire:(state,action)=>{
            const {key,value}=action.payload;
            state.hire[key]=value;
        }
    }
})

export const {setHire}=hireSlice.actions;
export default hireSlice.reducer;