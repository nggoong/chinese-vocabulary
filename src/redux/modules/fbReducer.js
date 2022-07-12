import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    lastVisible:null
}



const fbSlice = createSlice({
    name:'fb',
    initialState,
    reducers: {
        updateLastVisible: (state, action) => {
            state.lastVisible = action.payload[action.payload.length - 1];
        },
        updateDefaultLastVisible: (state) => {
            state.lastVisible = null;
        }
    },
})


const fbActions = fbSlice.actions;
export {fbActions};
export default fbSlice.reducer;