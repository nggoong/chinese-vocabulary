import React, { useRef } from 'react';
import styled from 'styled-components';
import { fbActions } from '../redux/modules/fbReducer';
import { vocaActions } from '../redux/modules/vocaReducer';
import { useDispatch } from 'react-redux';
import {db} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';

const InputPage = ({ title, btnText }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputRefs = useRef([]);

    const isComplete = () => {
        let result = true;
        for(let i of inputRefs.current) {
            if(!i.value) {
                result = false;
                break;
            }
        }

        return result;
    }

    const addBtnClickHandler = async () => {
        const check = isComplete();
        if(!check) {
            alert('폼을 모두 작성해주세요!');
            return;
        }
        else {
            dispatch(fbActions.updateDefaultLastVisible());
            let new_data = {
                word: inputRefs.current[0].value,
                pinyin: inputRefs.current[1].value,
                mean: inputRefs.current[2].value,
                example: inputRefs.current[3].value,
                trans: inputRefs.current[4].value,
                timestamp: Number(new Date()) // 정렬을 위한 타임스탬프 추가
            }
            await addDoc(collection(db, 'voca'), new_data);
            navigate('/');
        }

    }

    return(
        <InputsWrapper>
        <h4>{ title }</h4>
        <input placeholder='단어' name='word_input' ref={el => inputRefs.current[0] = el}></input>
        <input placeholder='병음' name='pinyin_input' ref={el => inputRefs.current[1] = el}></input>
        <input placeholder='의미' name='mean_input' ref={el => inputRefs.current[2] = el}></input>
        <input placeholder='예문' name='example_input' ref={el => inputRefs.current[3] = el}></input>
        <input placeholder='해석' name='trans_input' ref={el => inputRefs.current[4] = el}></input>
        <div className='button-area'> <button onClick={addBtnClickHandler}>{btnText}</button></div>
        </InputsWrapper>
    )
}

export default InputPage;

const InputsWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    width:100%;
    max-width:400px;
    gap:20px;
    margin:0 auto;
    & > h4 {
        text-align:center;
        font-size:18px;
        font-weight:600;
        color:rgb(10, 112, 41);
        margin:0;
    }

    & > input {
        width:100%;
        height:50px;
        box-sizing:border-box;
        padding:0 20px;
        font-size: 20px;
        border-radius:10px;
        border-color:rgb(10, 112, 41);
        outline-color: rgb(10, 112, 41);
    }

    & > .button-area {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:50px;
        & > button {
            height:100%;
            width: 30%;
            border-radius: 10px;
            cursor:pointer;
        }
    }
`