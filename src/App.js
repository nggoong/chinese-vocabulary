import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InputPage from './components/InputPage';
import Spinner from './components/Spinner';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Spinner></Spinner>
      <Contents>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/word/add' element={<InputPage title='단어 추가하기' btnText='추가하기' isEdit={false}/>}/>
          <Route path='/word/edit/:id' element={<InputPage title='단어 수정하기' btnText='수정하기' isEdit={true}/>}/>
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
