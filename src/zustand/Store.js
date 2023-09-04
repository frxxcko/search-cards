import { create } from 'zustand'

export const useStore = create((set) => ({
    cardList: [],
    addCard: (card) => set(state => ({ cardList: [...state.cardList, card] })),
    deleteCard: (cardId) => set(state => ({ cardList: state.cardList.filter(card => card.id !== cardId) })),
    clearList: () => set(() => ({ cardList: [] }))
}))