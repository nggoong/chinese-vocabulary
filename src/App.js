import React, { useEffect } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InputPage from './components/InputPage';
import {db} from './firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import Spinner from './components/Spinner';

const App = () => {
  // useEffect(async ()=> {
  //   // console.log(db);
  //   // // 컬렉션 정보
    
  //   // // 가져오기
  //   // const query = await getDocs(collection(db, "voca"));
  //   // console.log(query);
  //   // query.forEach((doc) => {
  //   //   console.log(doc.id, doc.data());
  //   // })

  //   // 추가하기
  //   // addDoc(collection(db, 'voca'), {})

  //   // 수정하기
  //   // const docRef = doc(db, 'voca', 'id >> 파이어베이스 아디')
  //   // updateDoc(docRef, {수정할 정보})
  // },[])
  return (
    <div className="App">
      <Header/>
      <Spinner></Spinner>
      <Contents>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/word/add' element={<InputPage title='단어 추가하기'/>}/>
        </Routes>
      </Contents>
    </div>
  );
}

export default App;

const Contents = styled.div`
  width:85%;
  margin:0 auto;
  padding-top:90px;
`
