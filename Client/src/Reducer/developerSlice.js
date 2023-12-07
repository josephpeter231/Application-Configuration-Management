import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    developer:[]
}

const developerSlice = createSlice({
    name:'developer list',
    initialState:initialState,

    reducers:{
    
        developerDetails: (state,action) =>{

            state.developer = action.payload;

        }
    }
})

export default developerSlice.reducer;

export  const {developerDetails} = developerSlice.actions;