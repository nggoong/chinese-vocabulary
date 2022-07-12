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
    // 파이어스토어에서 snapshot을 이용하여 페이지네이션을 구현해야하기 때문에
    if(fbState === null) {
        res = await getDocs(query(vocaCollection, orderBy('timestamp', 'desc'), limit(12)));
    }
    else {
        // fbReducer에 저장된 값을 이용하여 페이지네이션
        res = await getDocs(query(vocaCollection, orderBy('timestamp', 'desc'), startAfter(fbState), limit(12)))
    }

    // 받아온 res(snapshot)의 docs를 fbReducer에 넘겨줌
    let snapshotDocs = res.docs;
    dispatch(fbActions.updateLastVisible(snapshotDocs));

    let new_data = [];
    res.forEach((doc) => {
        let new_obj = {...doc.data(), docID:doc.id}
        new_data.push(new_obj);
    })
    return new_data;
});

const vocaSlice = createSlice({
    name:'voca',
    initialState,
    reducers: {
        setDefaultData:(state)=> {
            state.data= []; // 기존 state에서 더해주는 로직이므로 state를 초기화하는 로직이 필요할 때가 있음
        }
    },
    extraReducers: {
        [fetchVoca.pending.type]:(state) => {
            state.isLoad = true;
        },
        [fetchVoca.fulfilled.type]:(state, action) => {
            state.data = state.data.concat([...action.payload]); // 무한스크롤 구현을 위해 기존 state에 값을 더해주는 로직
            state.isLoad = false;
        }
    }
})

const vocaActions = vocaSlice.actions;
export {vocaActions};

export default vocaSlice.reducer;