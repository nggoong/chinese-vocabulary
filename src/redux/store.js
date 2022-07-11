import vocaReducer from "./modules/vocaReducer";
import fbReducer from "./modules/fbReducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        voca: vocaReducer,
        fb:fbReducer
    }
})

export default store;