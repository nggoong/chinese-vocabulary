import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    lastVisible:null
}



const fbSlice = createSlice({
    name:'fb',
    initialState,
    reducers: {
        updateLastVisible: (state, action) => {
            let newLastVisible = action.payload.docs[action.payload.docs.length - 1];
            console.log(action.payload);
            console.log(newLastVisible);
            state.lastVisible = newLastVisible;
        },
        updateDefaultLastVisible: (state) => {
            state.lastVisible = null;
        }
    },
})


const fbActions = fbSlice.actions;
export {fbActions};
export default fbSlice.reducer;