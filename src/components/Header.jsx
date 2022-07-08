import React from 'react';
import styled from 'styled-components';

const Header = () => {


    return(
        <HeaderWrapper>
        <p>중국어 단어장</p>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100;
    background:white;
    color:gray;
    font-size:6vw;
    height:50px;
    width:100%;
    position:fixed;
    left:0;
    top:0;
    border-bottom:2px solid rgb(219, 232, 216);
    
`