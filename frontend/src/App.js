import BuyButton from './components/home/BuyButton.js'
import Header from './components/home/Header.js';
import styled from 'styled-components'
import {Body,SubTitle} from './css/globalStyles'
import {useEffect, useRef} from 'react'

function App() {
    //console.log(rowWidth);

  return (
    <Body>
      {/* <MiddleWrap>
        <Header></Header>
        <SubTitle>DECEMBER 17</SubTitle>
        <SubTitle>HYDE & SEEK</SubTitle>
        <BuyButton />
      </MiddleWrap> */}
      <MiddleWrapGrid>
        <Row1 >
          <Header />
        </Row1>
        <Row2 id="row2">
          <BuyButton />   
        </Row2> 
      </MiddleWrapGrid>
    </Body>
  );
}


const MiddleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  width: 40%;
  border-style: solid;
`
const MiddleWrapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 500px);
  grid-column-gap: 0px;
  grid-row-gap: 19px;
  border-width: 1px;
  border-type: solid;
  border-width: 1px;
`

const Row1 = styled.div`
  grid-area: 1/1;
  position: relative;
`

const Row2 = styled.div`
  grid-area: 2/1;
  position: relative;
`
export default App;
