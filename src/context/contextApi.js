import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    beers: [],
    // handleBeerLists: () => { },
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;