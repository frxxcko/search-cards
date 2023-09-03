import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input'
import { Background } from '../components/Background'
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { AxiosInstance } from '../services/AxiosService';

export const Home = () => {
    const [cardName, setCardName] = useState('Underworld Dreams');
    const btnRef = useRef();
    const setSC_URL = (cardName) => `https://starcitygames.com/search/?card_name=${cardName}`;
    const setCK_URL = (cardName) => `https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D=${cardName}`
    const [card, setCard] = useState(null);

    const onSearchBtnClick = () => {
        const inputText = btnRef.current.value.trim();
        if (inputText) {
            setCardName(inputText);
        }
    }

    useEffect(() => {
        try {
            AxiosInstance.get(`cards/named?fuzzy=${cardName}`).then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    }, [cardName]);

    return (
        <Background>
            <div className='d-flex flex-column align-items-center gap-2'>
                <div className='d-flex gap-2'>
                    <Input ref={btnRef} setCardName={setCardName} />
                    <Button text='Buscar' onClick={onSearchBtnClick} />
                </div>
                <h3 className='mt-5'>{cardName}</h3>
                <div className='d-flex gap-5 mt-5'>
                    <Button>
                        <a target='_blank' rel='noreferrer' href={setCK_URL(cardName)}>Check '<span style={{ fontWeight: 'bold' }}>{cardName}</span>' in CardKindom</a>
                    </Button>
                    <Button>
                        <a target='_blank' rel='noreferrer' href={setSC_URL(cardName)}>Check '<span style={{ fontWeight: 'bold' }}>{cardName}</span>' in StarCity</a>
                    </Button>
                </div>
            </div>
        </Background>
    )
}
