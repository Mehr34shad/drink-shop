import React, { useEffect, useState } from 'react';

import { orderBy } from 'lodash';
import { ToastContainer } from 'react-toastify';
import Contexts from '../context/contextApi';
import { getAllBeerList } from './../services/beerList';
import { getBeerPairPizza } from './../services/beerPairPizza';
import { getBeerPairSteak } from './../services/beerPairSteak';
import {
  errorMessage,
  infoMessage,
  successMessage,
  warningMessage,
} from '../utils/message';

const Global = (props) => {
  const [Cards, setCards] = useState([]);
  const [Favorite, setFavorite] = useState([]);
  const [AllBeers, setAllBeers] = useState([]);
  const [BeerPairPizza, setBeerPairPizza] = useState([]);
  const [BeerPairSteak, setBeerPairSteak] = useState([]);
  const [total, setTotal] = useState(0);

  const allbeer = async () => {
    try {
      const all = await getAllBeerList();
      const pizza = await getBeerPairPizza();
      const Steak = await getBeerPairSteak();
      setBeerPairSteak(Steak.data);
      setBeerPairPizza(pizza.data);
      setAllBeers(all.data);
    } catch (err) {
      warningMessage('Check your internet connection');
      console.error(err);
    }
  };

  useEffect(() => {
    allbeer();

    const getItem = window.localStorage.getItem('beer');
    const getTotal = window.localStorage.getItem('total');
    const getFavorite = window.localStorage.getItem('favorite');
    if (getItem) {
      setCards(JSON.parse(getItem));
      setTotal(getTotal);
    }
    if (getFavorite) {
      setFavorite(JSON.parse(getFavorite));
    }
  }, []);

  const handleNewCard = (ids, names, imgs, tagline, price) => {
    const cards = [...Cards];
    const card = {
      id: ids,
      name: names,
      image_url: imgs,
      tagline: tagline,
      price: price,
      show: false,
    };
    cards.push(card);
    setCards(cards);
    newTotal(price);
    window.localStorage.setItem('beer', JSON.stringify(cards));
    successMessage('Item successfully added to cart');
  };

  const handleFavorite = (ids, names, imgs, tagline, price, brewed) => {
    const favoriteIndex = Favorite.findIndex((p) => p.id === ids);

    if (favoriteIndex === -1) {
      const favorites = [...Favorite];
      const favorite = {
        id: ids,
        name: names,
        image_url: imgs,
        tagline: tagline,
        price: price,
        show: true,
      };
      favorites.push(favorite);
      setFavorite(favorites);
      window.localStorage.setItem('favorite', JSON.stringify(favorites));
      infoMessage('Item added to favorites');
    } else {
      const favorites = [...Favorite];
      const filterfavorite = favorites.filter((p) => p.id !== ids);
      setFavorite(filterfavorite);
      window.localStorage.setItem('favorite', JSON.stringify(filterfavorite));
      warningMessage('Item removed from favorites');

      let hours = 30 * 24; // Reset when storage is more than 1 Month
      let now = new Date().getTime();

      if (
        window.localStorage.getItem('favorite') === '[]' ||
        now > hours * 60 * 60 * 1000
      ) {
        window.localStorage.removeItem('favorite');
      }
    }
  };

  const handleDeleteCard = (id) => {
    const cards = [...Cards];
    const filterCard = cards.filter((p) => p.id !== id);
    setCards(filterCard);
    window.localStorage.setItem('beer', JSON.stringify(filterCard));

    const modalIndex = AllBeers.find((p) => p.id === id);
    newTotal(modalIndex.srm, false);

    let hours = 7 * 24; // Reset when storage is more than 1 Week
    let now = new Date().getTime();

    if (
      window.localStorage.getItem('beer') === '[]' ||
      now > hours * 60 * 60 * 1000
    ) {
      localStorage.clear();
      window.localStorage.removeItem('beer');
      window.localStorage.removeItem('total');
    }
    errorMessage('Remove Item From Cart');
  };

  const sortBeerNameAsc = () => {
    setAllBeers(orderBy(AllBeers, 'name', 'asc'));
    console.log('sort');
  };
  const sortBeerNameDes = () => {
    setAllBeers(orderBy(AllBeers, 'name', 'desc'));
    console.log('sort');
  };

  const sortBeerAbvAsc = () => {
    setAllBeers(orderBy(AllBeers, 'abv', 'asc'));
    console.log('sort');
  };

  const sortBeerAbvDes = () => {
    setAllBeers(orderBy(AllBeers, 'abv', 'desc'));
    console.log('sort');
  };

  const newTotal = (price, action = true) => {
    if (action === true) {
      const result = total + price;
      setTotal(result);
      window.localStorage.setItem('total', result);
    } else {
      const result = total - price;
      setTotal(result);
      window.localStorage.setItem('total', result);
    }
  };

  return (
    <Contexts.Provider
      value={{
        cards: Cards,
        favorite: Favorite,
        AllBeers: AllBeers,
        BeerPairPizza: BeerPairPizza,
        BeerPairSteak: BeerPairSteak,
        total: total,
        sortBeerNameAsc: sortBeerNameAsc,
        sortBeerNameDes: sortBeerNameDes,
        sortBeerAbvAsc: sortBeerAbvAsc,
        sortBeerAbvDes: sortBeerAbvDes,
        handleNewCard: handleNewCard,
        handleDeleteCard: handleDeleteCard,
        handleFavorite: handleFavorite,
      }}
    >
      <ToastContainer />
      {props.children}
    </Contexts.Provider>
  );
};

export default Global;
