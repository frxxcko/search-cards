import React from 'react'
import { useStore } from '../zustand/Store'

export const CardItem = ({ card, deleteCard }) => {
    return (
        <div className='d-flex align-items-center flex-column gap-2 card-list-item'>
            <i id={card.id} className="fa-regular fa-circle-xmark" onClick={e => deleteCard(e.target.id)} style={{ color: '#ffffff' }}></i>
            <img style={{ height: '150px' }} src={card.image} alt={card.name} />
            <h6>{card.name}</h6>
        </div>
    )
}
