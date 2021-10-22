import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    beers: [],
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;