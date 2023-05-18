import { useEffect, useState } from "react";
import { SWIGGY_MAIN_API_URL } from "../Constant";

export function useAllRestaurant() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFliteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect hook
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(SWIGGY_MAIN_API_URL);

    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFliteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //
    // setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [allRestaurants, filteredRestaurants, searchText];
}
