import React from 'react'
import { styled } from 'styled-components'
import { t } from '../UI/Theme'

export const Button = ({ children, text, onClick }) => {
    return (
        <SB className='d-flex justify-content-center align-items-center' onClick={onClick}>
            {text || children}
        </SB>
    )
}

const SB = styled.button`
    background-color: rgb(34, 23, 51);
    border: 1px solid ${t.primary};
    border-radius: 4px;
    color: #fff;
    font-family: 'Barlow';
    padding: 5px 20px;
    cursor: pointer;
`
