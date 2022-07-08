import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InputPage from './components/InputPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Contents>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/word/add' element={<InputPage/>}/>
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
