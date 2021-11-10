import React from 'react'
import { ReactP5Wrapper } from "react-p5-wrapper";
import styled from 'styled-components'
import {Title} from '../../css/globalStyles'

const TWrap = styled.div`
    position: relative;
    z-index: 2;
`

const P5Wrap = styled.div`
  background-color: black;
  position: absolute;
`


const Header = (props) => {
console.log(props)
function sketch(p5) {
    p5.setup = () => p5.createCanvas(500, 100, p5.WEBGL);
  
    p5.draw = () => {
      p5.background(250);
      p5.normalMaterial();
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.plane(100);
      p5.pop();
    };
  }

    return (
        <div>
            <P5Wrap>
                <ReactP5Wrapper sketch={sketch} />    
            </P5Wrap>
            <TWrap>
                <Title>THE WHITE HOUSE</Title>
            </TWrap>
        </div>
    )
}




export default Header
