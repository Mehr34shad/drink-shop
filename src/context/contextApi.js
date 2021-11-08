import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    AllBeers: [],
    total: 0,
    sort:  () => { },
    sortBeerNameAsc: () => { },
    allbeers: () => { },
    beerpizza: () => { },
    beersteak: () => { },
    sortBeerNameDes: () => { },
    sortBeerAbvAsc: () => { },
    sortBeerAbvDes: () => { },
    handleNewCard: () => { },
    handleFavorite: () => { },
    handleDeleteCard: () => { },
});

export default contexts;