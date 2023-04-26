import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const restaurant = useParams();
  const { id } = restaurant;

  const [displayRestaurant, setDisplayRestaurant] = useState(null);
  const [menuRestaurant, setMenuRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);
  const getRestaurant = async function () {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5961124&lng=85.16511059999999&restaurantId=${restaurant.id}&submitAction=ENTER`
    );
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

  return !displayRestaurant && !menuRestaurant ? (
    <Shimmer />
  ) : (
    <div className="display-restro">
      <div>
        <h4>{`Restaurant-id: ${displayRestaurant?.id}`}</h4>
        <h2>{displayRestaurant?.name}</h2>
        <img src={img_CDN_URL + displayRestaurant?.cloudinaryImageId} />
        <h3>{displayRestaurant?.areaName}</h3>
        <h3>{displayRestaurant?.city}</h3>
        <h3>{displayRestaurant?.costForTwoMessage}</h3>
      </div>
      <div className="restro-menu">
        <h2>MENU</h2>
        {menuRestaurant[0].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
