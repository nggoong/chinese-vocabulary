import React, {useState} from 'react';
import styled from 'styled-components';
import VocaCard from './VocaCard'

const Home = () => {
    const [voca, setVoca] = useState([
        {id:1, text:'단어단어123', pinyin:'병음병음1', mean:'의미의미', example:'예문예문', trans:'해석해석'},
        {id:2, text:'단어단어123', pinyin:'병음병음2', mean:'의미의미', example:'예문예문', trans:'해석해석'},
        {id:3, text:'단어단어123', pinyin:'병음병음3', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:4, text:'단어단어123', pinyin:'병음병음4', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:5, text:'단어단어123', pinyin:'병음병음5', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:6, text:'단어단어123', pinyin:'병음병음6', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:7, text:'단어단어123', pinyin:'병음병음7', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:8, text:'단어단어123', pinyin:'병음병음8', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:9, text:'단어단어123', pinyin:'병음병음9', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:10, text:'단어단어123', pinyin:'병음병음10', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:11, text:'단어단어123', pinyin:'병음병음11', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:12, text:'단어단어123', pinyin:'병음병음12', mean:'의미의미',example:'예문예문', trans:'해석해석'},
        {id:13, text:'단어단어123', pinyin:'병음병음13', mean:'의미의미',example:'예문예문', trans:'해석해석'},
    ]);

    return(
        <VocaListWrapper>
         {voca.map((item, index)=><VocaCard item={item} key={item.id}></VocaCard>)}
        </VocaListWrapper>
    )
}

export default Home;

const VocaListWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    width:100%;
`