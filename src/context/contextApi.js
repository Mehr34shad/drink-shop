import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    beers: [],
    sortBeerNameAsc: () => { },
    sortBeerNameDes: () => { },
    sortBeerAbvAsc: () => { },
    sortBeerAbvDes: () => { },
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;