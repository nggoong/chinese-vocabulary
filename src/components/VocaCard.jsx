import React from 'react';
import styled from 'styled-components';
import {BsCheckCircle, BsPencilSquare, BsXCircle} from 'react-icons/bs';

const VocaCard = ({ item }) => {

    return(
        <VocaCardWrapper>
            <MainContents>
                <h4>{item.text}</h4>
                <div className='actions'>
                    <div className='action-check'><p><BsCheckCircle/></p></div>
                    <div className='action-modify'><p><BsPencilSquare/></p></div>
                    <div className='action-delete'><p><BsXCircle/></p></div>
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
    transition:box-shadow 300ms ease-in-out 0s;
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