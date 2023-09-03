import React from 'react'
import { styled } from 'styled-components'
import { t } from '../UI/Theme'

export const Background = ({ children }) => {
    return (
        <BG className='d-flex justify-content-center align-items-center flex-column'>
            {children}
        </BG>
    )
}

const BG = styled.div`
    height: 100vh;
    /* background-image: url('https://images.ctfassets.net/s5n2t79q9icq/2Eq0mcvZ8Pw9H57HaVRZrq/6af5fd80dcea300cb818e1b014c98dc1/v4anjdKFGB_1600x1080-80.jpg?q=70'); */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
`
