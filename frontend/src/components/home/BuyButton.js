import React from 'react'
import styled from 'styled-components'
import enterAnimation from '../../css/enterAnimation.js'


const BuyButton = () => {
    return (
        <Button id="buy-button">
            Buy Tickets
        </Button>
    )
}


const Button = styled.button`
    padding: 2em;
    animation-name: ${enterAnimation};
    animation-duration: 1s;
`

export default BuyButton
