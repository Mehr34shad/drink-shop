import { createContext } from 'react';

const contexts = createContext({
    cards: [],
    favorite: [],
    AllBeers: [],
    BeerPairPizza: [],
    BeerPairSteak: [],
    total: 0,
    sort: () => { },
    sortBeerNameAsc: () => { },
    allbeer: () => { },
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