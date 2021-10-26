import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    beers: [],
    // handleBeerLists: () => { },
    sortBeerAsc: () => { },
    sortBeerDes: () => { },
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;