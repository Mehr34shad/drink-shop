import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    beers: [],
    total: 0,
    sortBeerNameAsc: () => { },
    sortBeerNameDes: () => { },
    sortBeerAbvAsc: () => { },
    sortBeerAbvDes: () => { },
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;