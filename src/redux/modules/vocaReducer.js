import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fbActions } from './fbReducer';
import { collection, getDocs, query, orderBy, limit, startAfter} from 'firebase/firestore';
import {db} from '../../firebase';

let initialState = {
    data:[],
    isLoad:false
};

// Thunk 생성
export const fetchVoca = createAsyncThunk('voca/fetchVoca', async (_, {getState, dispatch}) => {
    const vocaCollection = collection(db, 'voca');
    let fbState = getState().fb.lastVisible;
    let res;
    
    // 타임스탬프를 기준으로 내림차순 정렬
    // 기존에는 임의의 id를 기준으로 정렬하기 때문에 뒤죽박죽
    if(fbState === null) {
        res = await getDocs(query(vocaCollection, orderBy('timestamp', 'desc'), limit(12)));
    }
    else {
        res = await getDocs(query(vocaCollection, orderBy('timestamp', 'desc'), startAfter(fbState), limit(12)))
    }
    dispatch(fbActions.updateLastVisible(res))
    let new_data = [];
    res.forEach((doc) => {
        let new_obj = {...doc.data(), docID:doc.id}
        new_data.push(new_obj);
    })
    console.log(new_data);
    return new_data;
});

const vocaSlice = createSlice({
    name:'voca',
    initialState,
    reducers: {
        setDefaultData:(state)=> {
            state.data= [];
        }
    },
    extraReducers: {
        [fetchVoca.pending.type]:(state) => {
            state.isLoad = true;
        },
        [fetchVoca.fulfilled.type]:(state, action) => {
            state.data = state.data.concat([...action.payload]);
            state.isLoad = false;
        }
    }
})

const vocaActions = vocaSlice.actions;
export {vocaActions};

export default vocaSlice.reducer;