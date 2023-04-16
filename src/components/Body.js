import { render } from "react-dom";
import { restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFliteredRestaurants] = useState([]);
  //
  const [searchText, setSearchText] = useState("");

  // useEffect hook
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFliteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //
    // setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  // console.log("render");
  // conditional rendering
  // if no restaurant--> shimmer UI
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          value={searchText}
          className="text-input"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //filter the data
            // const data = filterData(searchText, allRestaurant);
            const data = filterData(searchText, allRestaurants);

            //update the state-restaurants variable
            // setFliteredRestaurants(data);
            setFliteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      {/* to display the restaurant --- all restaurant/// filtered restaurant */}
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestaurants.map((restro) => {
            return <RestaurantCard {...restro.data} key={restro.data?.id} />;
          })
        )}
      </div>
    </>
  );
};
export default Body;
