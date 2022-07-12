import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {db} from '../firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';

const InputPage = ({ title, btnText, isEdit }) => {
    const navigate = useNavigate();
    const params = useParams();

    const inputRefs = useRef([]);
    const docTimestamp = useRef(null);


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

    const BtnClickHandler = async () => {
        const check = isComplete();
        if(!check) {
            alert('폼을 모두 작성해주세요!');
            return;
        }
        else {
            let new_data = {
                word: inputRefs.current[0].value,
                pinyin: inputRefs.current[1].value,
                mean: inputRefs.current[2].value,
                example: inputRefs.current[3].value,
                trans: inputRefs.current[4].value,
                timestamp: isEdit? docTimestamp.current : Number(new Date()) // 정렬을 위한 타임스탬프 추가, 수정 시에는 기존 값 재사용
            }
            if(isEdit) {
                const docRef = doc(db, 'voca', params.id);
                await updateDoc(docRef, new_data)
            }
            else await addDoc(collection(db, 'voca'), new_data);
            navigate('/');
        }

    }

    useEffect(()=> {
        if(isEdit) {
            const getOneDoc = async (docID) => {
                const docRef = doc(db, 'voca', docID);
                const docSnap = await getDoc(docRef);
                if(docSnap) return docSnap.data();
                else return {};
            }

            // 수정 페이지일때 세팅
            const setInputValue = async () => {
                const doc = await getOneDoc(params.id);
                inputRefs.current[0].value = doc.word;
                inputRefs.current[1].value = doc.pinyin;
                inputRefs.current[2].value = doc.mean;
                inputRefs.current[3].value = doc.example;
                inputRefs.current[4].value = doc.trans;
                docTimestamp.current = doc.timestamp; // 수정 시에 기존 타임스탬프를 재사용하기 위함
            }

            setInputValue();
        }
        inputRefs.current[0].focus();
    }, []);

    return(
        <InputsWrapper>
        <h4>{ title }</h4>
        <input placeholder='단어' name='word_input' ref={el => inputRefs.current[0] = el}></input>
        <input placeholder='병음' name='pinyin_input' ref={el => inputRefs.current[1] = el}></input>
        <input placeholder='의미' name='mean_input' ref={el => inputRefs.current[2] = el}></input>
        <input placeholder='예문' name='example_input' ref={el => inputRefs.current[3] = el}></input>
        <input placeholder='해석' name='trans_input' ref={el => inputRefs.current[4] = el}></input>
        <div className='button-area'> <button onClick={BtnClickHandler}>{btnText}</button></div>
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