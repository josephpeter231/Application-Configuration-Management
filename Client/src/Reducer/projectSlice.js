import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    projects:[]
}

const projectSlice = createSlice({
    name:'Existing Project list',
    initialState:initialState,

    reducers:{
    
        projectDetails: (state,action) =>{

            state.projects = action.payload;

        }
    }
})

export default projectSlice.reducer;

export  const {projectDetails} = projectSlice.actions;