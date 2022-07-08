import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {


    return(
        <HeaderWrapper>
        <Link to="/"><p>중국어 단어장</p></Link>
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

    & > a {
        text-decoration: none;
        color:gray;
    }
    
`