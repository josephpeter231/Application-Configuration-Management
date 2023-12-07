import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    userDetails:[],
    isLoggedIn:false
}

const userSlice = createSlice({
    name:'user list',
    initialState:initialState,

    reducers:{
    
        userDetails: (state,action) =>{

            state.userDetails = action.payload;

        },
        loggedInStatus: (state,action) =>{
            state.isLoggedIn = action.payload;
        }
    }
})

export default userSlice.reducer;

export  const {userDetails,loggedInStatus} = userSlice.actions;