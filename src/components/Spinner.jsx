import React from 'react';
import styled from 'styled-components';
import {ImSpinner2} from 'react-icons/im';
import {useSelector} from 'react-redux';

const Spinner = () => {
    const loading = useSelector((state) => state.voca.isLoad);
    console.log(loading)
    return(
        <SpinnerWrapper loading={loading}>
            <p><ImSpinner2/></p>
        </SpinnerWrapper>
    )
}

export default Spinner;

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
    visibility:${props => props.loading ? undefined:'hidden'};

    & > p {
        font-size:50px;
        color:green;
    }
`