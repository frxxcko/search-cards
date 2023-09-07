import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input'
import { Background } from '../components/Background'
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { AxiosInstance } from '../services/AxiosService';

import { mapCard } from '../helpers/MapCard';
import { useStore } from '../zustand/Store';

import { LocalStorageService } from '../services/LocalStorageService';
import { CardItem } from '../components/CardItem';


export const Home = () => {
    const [cardName, setCardName] = useState('');

    const [card, cardList, setCard, addCard, deleteCard, selectCard, clearList] = useStore((state) => [state.card, state.cardList, state.setCard, state.addCard, state.deleteCard, state.selectCard, state.clearList])

    const btnRef = useRef();

    const setSC_URL = (cardName) => `https://starcitygames.com/search/?card_name=${cardName}`;
    const setCK_URL = (cardName) => `https://www.cardkingdom.com/catalog/search?search=header&filter%5Bname%5D=${cardName}`;

    const onSearchBtnClick = () => {
        const inputText = btnRef.current.value.trim();
        if (inputText) {
            setCardName(inputText);
        }
    }

    useEffect(() => {
        btnRef.current.focus();
        AxiosInstance.get(`cards/random`)
            .then(res => {
                let card = res.data;
                if (card !== null || card !== undefined) {
                    setCard(mapCard(card))
                }
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => (console.log(cardList)), [cardList])

    useEffect(() => {
        if (cardName) {
            AxiosInstance.get(`cards/named?fuzzy=${cardName}`)
                .then(res => {
                    let card = res.data;
                    if (card !== null || card !== undefined) {
                        addCard(mapCard(card))
                        setCard(mapCard(card))
                    }
                    console.log(res)
                    btnRef.current.value = '';
                })
                .catch(err => console.log(err))
            console.log(cardList)
        }
    }, [cardName]);

    return (
        <Background>
            <Card className='d-flex flex-column align-items-center gap-1' cardImageURL={card?.art_crop}>
                {card && <img style={{ height: '400px', paddingTop: '20px' }} className='mb-1' src={card.image} alt={card.name} />}
                <h3 className='mb-1'>{card?.name ?? cardName}</h3>
                <div className='d-flex gap-2'>
                    <Input ref={btnRef} setCardName={setCardName} />
                    <Button text='Search' onClick={onSearchBtnClick} />
                </div>
                <div className='my-1 d-flex gap-2 card-list'>
                    {cardList && cardList.map((card, i) => (
                        <CardItem card={card} key={`card-${i}`} deleteCard={deleteCard} selectCard={selectCard} />
                    ))}
                </div>
                <div className='d-flex gap-2 mx-3 mb-2 responsive'>
                    <Button>
                        <a target='_blank' rel='noreferrer' href={setCK_URL(card?.name ?? cardName)}>Check '<span style={{ fontWeight: 'bold' }}>{card?.name ?? cardName}</span>' in CardKindom</a>
                    </Button>
                    <Button>
                        <a target='_blank' rel='noreferrer' href={setSC_URL(card?.name ?? cardName)}>Check '<span style={{ fontWeight: 'bold' }}>{card?.name ?? cardName}</span>' in StarCity</a>
                    </Button>
                </div>
            </Card>
        </Background>
    )
}
