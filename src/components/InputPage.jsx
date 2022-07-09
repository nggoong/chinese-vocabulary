import React, { useRef } from 'react';
import styled from 'styled-components';
import {db} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';

const InputPage = ({ title }) => {
    const navigate = useNavigate();

    const inputRef = useRef({
        word_input:'',
        pinyin_input:'',
        mean_input:'',
        example_input:'',
        trans_input:''
    })

    const ChangeHandler = (e) => {
        inputRef.current = {...inputRef.current, [e.target.name]:e.target.value};
    }

    const addBtnClickHandler = async () => {
        let new_data = {
            id:2,
            word: inputRef.current.word_input,
            pinyin: inputRef.current.pinyin_input,
            mean: inputRef.current.mean_input,
            example: inputRef.current.example_input,
            trans: inputRef.current.trans_input,
            timestamp: Number(new Date()) // 정렬을 위한 타임스탬프 추가
        }

        console.log(new_data);
        const data = await addDoc(collection(db, 'voca'), new_data);
        console.log(data);
        navigate('/');

    }

    return(
        <InputsWrapper>
        <h4>{ title }</h4>
        <input placeholder='단어' name='word_input' onChange={ChangeHandler}></input>
        <input placeholder='병음' name='pinyin_input' onChange={ChangeHandler}></input>
        <input placeholder='의미' name='mean_input' onChange={ChangeHandler}></input>
        <input placeholder='예문' name='example_input' onChange={ChangeHandler}></input>
        <input placeholder='해석' name='trans_input' onChange={ChangeHandler}></input>
        <div className='button-area'> <button onClick={addBtnClickHandler}>추가하기</button></div>
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