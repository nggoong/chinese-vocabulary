import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import VocaCard from './VocaCard'
import {BsPlusLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { vocaActions, fetchVoca } from '../redux/modules/vocaReducer';
import { fbActions } from '../redux/modules/fbReducer';

const Home = () => {
    const voca = useSelector((state)=>state.voca.data);
    const dispatch = useDispatch();
    useEffect(()=> {
        const getVocas = () => {
            dispatch(fetchVoca());
        }
        dispatch(vocaActions.setDefaultData());
        getVocas();

        return(()=> {
            dispatch(vocaActions.setDefaultData());
            dispatch(fbActions.updateDefaultLastVisible());
        })
    }, [])
    

    return(
        <VocaListWrapper>
        <GoToAdd><Link to="/word/add"><BsPlusLg/></Link></GoToAdd>
         {voca.map((item, index)=><VocaCard item={item} key={item.docID} idx={index} length={voca.length}></VocaCard>)}
        </VocaListWrapper>
    )
}

export default Home;

const VocaListWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    width:100%;
`

const GoToAdd = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight:600;
    width:50px;
    height:50px;
    position:fixed;
    bottom:10px;
    right:10px;
    background:rgb(10, 112, 41);
    border-radius:50%;
    cursor:pointer;

    & > a {
        color:white;
    }
`