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
            // 무한스크롤로 인해 데이터를 불러오는 것이 아니라면
            // 데이터 중복이나 첫번째 페이지를 넘겨버리는 현상을 방지하기 위해
            // 초기화하는 리듀서 함수가 필요함
            state.lastVisible = null;
        }
    },
})


const fbActions = fbSlice.actions;
export {fbActions};
export default fbSlice.reducer;