import React, { useEffect, useState } from 'react';

import { orderBy } from 'lodash';

import { ToastContainer } from 'react-toastify';
import Contexts from '../context/contextApi';
import axios from 'axios';
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

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const res = await axios.get('https://api.punkapi.com/v2/beers');
      setBeers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

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

    errorMessage('Remove Item From Cart');
  };

  const sortBeerAsc = () => {
  setBeers(orderBy(beers, 'name', 'asc'));
    // alert("sort")
  };

  const sortBeerDes = () => {
    setBeers(orderBy(beers, 'name', 'desc'));
  };

  return (
    <Contexts.Provider
      value={{
        cards: Cards,
        favorite: Favorite,
        beers: beers,
        sortBeerAsc: sortBeerAsc,
        sortBeerDes: sortBeerDes,
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
