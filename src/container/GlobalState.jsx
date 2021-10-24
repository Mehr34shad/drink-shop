import React, { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import Contexts from '../context/contextApi';
import { getBeerList } from '../services/beerList';
import {
  errorMessage,
  infoMessage,
  successMessage,
  warningMessage,
} from '../utils/message';

const Global = (props) => {
  const [beers, setBeers] = useState([]);
  const [Cards, setCards] = useState([]);
  const [Favorite, setFavorite] = useState([]);
  // const [Beers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://api.punkapi.com/v2/beers')
  //     .then((res) => {
  //       setBeers(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const  handleBeerLists = async => {
    const {beers} = await getBeerList();
    console.log(getBeerList);
    setBeers({ beers });
  };


  const handleBeerLists = async event => {
    // event.preventDefault();
    // const user = {
    //     fullname,
    //     email,
    //     password
    // };

    // try {
        // const { status } = await registerUser(user);
        const {beers} = await getBeerList();
        // if (status === 201) {
        //     toast.success("کاربر با موفقیت ساخته شد.", {
        //         position: "top-right",
        //         closeOnClick: true
        //     });
        //     reset();
        // }
    // } catch (ex) {
        // toast.error("مشکلی پیش آمده.", {
        //     position: "top-right",
        //     closeOnClick: true
        // });
        // console.log(ex);
    // }
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
  return (
    <Contexts.Provider
      value={{
        cards: Cards,
        favorite: Favorite,
        // beers: Beers,
        handleBeerLists:handleBeerLists,
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
