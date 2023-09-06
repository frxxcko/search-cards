import React from 'react'

export const CardItem = ({ card, deleteCard, selectCard }) => {
    return (
        <div className='d-flex gap-1 card-list-item'>
            <i className="fa-regular fa-circle-xmark" onClick={() => deleteCard(card.id)} style={{ color: '#ffffff' }}></i>
            <div className='d-flex flex-column align-items-center' onClick={() => selectCard(card.id)} style={{ cursor: 'pointer' }}>
                <img style={{ height: '150px' }} src={card.image} alt={card.name} />
                <h6>{card.name}</h6>
            </div>
        </div>
    )
}
