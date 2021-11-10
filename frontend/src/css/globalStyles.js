import styled from "styled-components"

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  font-family: 'VT323', monospace;
  font-weight: 400 ;
  font-size: 4em;
  //width: 80%;
  color: white;
`

const SubTitle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  font-family: 'VT323', monospace;
  font-weight: 400 ;
  font-size: 2.5em;
  margin: 0; 
`

const Body = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`

export {Body,SubTitle,Title}