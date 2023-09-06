import { create } from 'zustand'

export const useStore = create((set) => ({
    card: null,
    cardList: [],
    setCard: (card) => set(state => state.card = card),
    addCard: (card) => set(state => ({ cardList: [...state.cardList, card] })),
    deleteCard: (cardId) => set(state => ({ cardList: state.cardList.filter(card => card.id !== cardId) })),
    selectCard: (cardId) => set(state => ({ card: state.cardList.find(card => card.id === cardId) })),
    clearList: () => set(() => ({ cardList: [] }))
}))