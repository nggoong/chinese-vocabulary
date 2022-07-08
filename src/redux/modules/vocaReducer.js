import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

let initialState = {
    data:[],
    isLoad:false
};

// Thunk 생성
export const fetchVoca = createAsyncThunk('voca/fetchVoca', async () => {
    const res = await getDocs(collection(db, "voca"));
    let new_data = [];
    res.forEach((doc) => {
        new_data.push(doc.data());
    })
    console.log(new_data);
    return new_data;
});

const vocaSlice = createSlice({
    name:'voca',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchVoca.pending.type]:(state) => {
            state.isLoad = true;
        },
        [fetchVoca.fulfilled.type]:(state, action) => {
            state.data = [...action.payload];
            state.isLoad = false;
        }
    }
})

const vocaActions = vocaSlice.actions;
export {vocaActions};

export default vocaSlice.reducer;