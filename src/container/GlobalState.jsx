import React, { useEffect, useState } from 'react';

import { orderBy } from 'lodash';
import { ToastContainer } from 'react-toastify';
import Contexts from '../context/contextApi';
import { getBeerList } from './../services/beerList';
import {
  errorMessage,
  infoMessage,
  successMessage,
  warningMessage,
} from '../utils/message';

const Global = (props) => {
  const [Cards, setCards] = useState([]);
  const [Favorite, setFavorite] = useState([]);
  const [beers, setBeers] = useState([]);
  const [total, setTotal] = useState(0);

  const sendGetRequest = async () => {
    try {
    const res = await getBeerList();
    setBeers(res.data);
    } catch (err) {
      warningMessage('Check your internet connection');
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
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

      infoMessage('Item added to favorites');
    } else {
      const favorites = [...Favorite];
      const filterfavorite = favorites.filter((p) => p.id !== ids);
      setFavorite(filterfavorite);
      warningMessage('Item removed from favorites');
    }
  };

  const handleDeleteCard = (id) => {
    const cards = [...Cards];
    const filterCard = cards.filter((p) => p.id !== id);
    setCards(filterCard);

    const modalIndex = beers.find((p) => p.id === id);
    newTotal(modalIndex.srm, false);
    errorMessage('Remove Item From Cart');
  };

  const sortBeerNameAsc = () => {
    setBeers(orderBy(beers, 'name', 'asc'));
  };

  const sortBeerNameDes = () => {
    setBeers(orderBy(beers, 'name', 'desc'));
  };

  const sortBeerAbvAsc = () => {
    setBeers(orderBy(beers, 'abv', 'asc'));
  };

  const sortBeerAbvDes = () => {
    setBeers(orderBy(beers, 'abv', 'desc'));
  };

  const newTotal = (price, action = true) => {
    if (action === true) {
      const result = total + price;
      setTotal(result);
    } else {
      const result = total - price;
      setTotal(result);
    }
  };

  return (
    <Contexts.Provider
      value={{
        cards: Cards,
        favorite: Favorite,
        beers: beers,
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
