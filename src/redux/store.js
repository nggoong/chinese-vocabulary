import vocaReducer from "./modules/vocaReducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        voca: vocaReducer
    }
})

export default store;