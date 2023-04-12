import { restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

function bringBack() {}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
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
            const data = filterData(searchText, restaurants);

            //update the state-restaurants variable
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restro) => {
          return <RestaurantCard {...restro.data} key={restro.data?.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
