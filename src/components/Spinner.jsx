import React from 'react';
import styled, { keyframes } from 'styled-components';
import {CgSpinnerTwoAlt} from 'react-icons/cg'
import {useSelector} from 'react-redux';

const Spinner = () => {
    const loading = useSelector((state) => state.voca.isLoad);
    console.log(loading)
    return(
        <SpinnerWrapper $loading={loading}>
            <p><CgSpinnerTwoAlt/></p>
        </SpinnerWrapper>
    )
}

export default Spinner;

const SpinnerRotation = keyframes`
    0% {
        transform:rotate(0deg);
        
    }
    50%{
        transform:rotate(180deg);
    }
    100% {
        transform:rotate(360deg);
    }
`

const SpinnerWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(248,248,248,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
    visibility:${props => props.$loading ? undefined:'hidden'};
    

    & > p {
        font-size:50px;
        color:green;
        transform-origin:center;
        margin:0;
        padding:0;
        animation:${SpinnerRotation} 2s linear infinite ;
    }
`