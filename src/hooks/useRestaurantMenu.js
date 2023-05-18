import React, { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../Constant";

// creating a custom hook
export default useRestaurant = (id) => {
  const [displayRestaurant, setDisplayRestaurant] = useState(null);
  const [menuRestaurant, setMenuRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);
  const getRestaurant = async function () {
    const data = await fetch(`${RESTAURANT_MENU_URL}${id}&submitAction=ENTER`);
    const json = await data.json();
    setDisplayRestaurant(json?.data?.cards[0]?.card?.card?.info);

    // removing undefined from array
    const check =
      json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (menu) => menu?.card?.card.itemCards
      );

    let menuData = check
      .filter((element) => element !== undefined)
      .map((item) => item.map((res) => res?.card?.info?.name));
    setMenuRestaurant(menuData);
  };
  return [displayRestaurant, menuRestaurant];
};
