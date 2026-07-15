import { configureStore } from "@reduxjs/toolkit";
import searchReaducer from './features/searchSlice'
import collectionReducer from "./features/collectionSlice";


export const store=configureStore({
    reducer:{
        search:searchReaducer,
        collection:collectionReducer
        
    } 
});