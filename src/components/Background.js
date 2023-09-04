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
    background-repeat: no-repeat;
    background-position: center;
`
