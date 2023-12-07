import {configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import userSlice from '../Reducer/userSlice';

const midleware = [thunkMiddleware];

const store = configureStore({

    reducer:{
        user:userSlice

    },
    middleware: ( getDefaultMiddleware )=>getDefaultMiddleware({serializableCheck: false}).concat(midleware),
})

export default store;