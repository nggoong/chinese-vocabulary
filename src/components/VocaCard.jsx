import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchVoca } from '../redux/modules/vocaReducer';
import {db} from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import {BsCheckCircle, BsPencilSquare, BsXCircle} from 'react-icons/bs';

const VocaCard = ({ item }) => {
    const dispatch = useDispatch();

    const vocaDelete = async () => {
        let result = window.confirm('정말 삭제할까요?');
        if(result) {
            const docRef = doc(db, 'voca', item.docID);
            await deleteDoc(docRef);
            alert('삭제 완료!');
            await dispatch(fetchVoca());
        }
    }

    return(
        <VocaCardWrapper>
            <MainContents>
                <h4>{item.word}</h4>
                <div className='actions'>
                    <div className='action-check btn'><p><BsCheckCircle/></p></div>
                    <div className='action-edit btn'><p><BsPencilSquare/></p></div>
                    <div className='action-delete btn' onClick={vocaDelete}><p><BsXCircle/></p></div>
                </div>
            </MainContents>
            <Pinyin><span>{`[${item.pinyin}]`}</span></Pinyin>
            <Mean>{item.mean}</Mean>
            <Example>{item.example}</Example>
            <Trans>{item.trans}</Trans>
            
        </VocaCardWrapper>
    )
}

export default VocaCard;

const VocaCardWrapper = styled.div`
    width:100%;
    padding:20px;
    box-sizing:border-box;
    border:2px solid rgb(10, 112, 41);
    border-radius:10px;
    background:white;
    transition:translate 300ms leaner 0s;

    @media screen and (min-width: 768px) {
        width: calc((100% - 20px) / 2);
    }

    @media screen and (min-width: 1024px) {
        width: calc((100% - 40px) / 3);
    }
`

const MainContents = styled.div`
    display:flex;
    align-items:center;
    
    & > h4 {
        margin:0;
        font-size:24px;
        font-weight:600;
        flex:1;
    }

    & > .actions {
        display:flex;
        gap:11px;
        font-size:18px;

        & > .btn {
            cursor:pointer;
        }
    }
`
const Pinyin = styled.div`
    margin-bottom:5px;
    & > span {
        font-size:14px;
    }
`

const Mean = styled.div`
    margin-bottom:10px;
    font-size:16px;
`
const Example = styled.div`
    margin-top:5px;
    color:rgb(9, 132, 227);
    font-size:14px;
`
const Trans = styled(Example)`

`