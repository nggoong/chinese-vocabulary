import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { vocaActions } from '../redux/modules/vocaReducer';
import { fbActions } from '../redux/modules/fbReducer';


const Header = () => {
    const dispatch = useDispatch();
    const headerClickhandler = () => {
        dispatch(vocaActions.setDefaultData());
        dispatch(fbActions.updateDefaultLastVisible());
    }

    return(
        <HeaderWrapper>
        <Link to="/" onClick={headerClickhandler}><p>중국어 단어장</p></Link>
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
    font-size:30px;
    margin:0;
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