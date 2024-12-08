import { createSlice } from "@reduxjs/toolkit"


const initialState={
    jobPost: '',
}

export const jobSlice=createSlice({
    name: "jobPost",
    initialState,
    reducers:{
        setJobPost:(state,action)=>{
            state.jobPost=action.payload;
        }
    }
})

export const {setJobPost}=jobSlice.actions
export default jobSlice.reducer;