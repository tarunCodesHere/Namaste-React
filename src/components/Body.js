import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_MAIN_API_URL } from "../Constant";
import filterData from "../utils/helper.js";
import useOnline from "../hooks/useOnline";

const Body = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFliteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();

  // useEffect hook
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(SWIGGY_MAIN_API_URL);

    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFliteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional rendering
  // if no restaurant--> shimmer UI
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-2 bg-green-50 px-3 py-5 start shadow-lg">
        <input
          value={searchText}
          className="p-2 px-10 text-black outline-gray-400"
          type="text"
          placeholder="Search any restaurant"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn bg-purple-900 rounded-md p-2 text-white ml-3 hover:bg-purple-500"
          onClick={() => {
            //filter the data
            // const data = filterData(searchText, allRestaurant);
            const data = filterData(searchText, allRestaurants);

            //update the state-restaurants variable
            // setFliteredRestaurants(data);
            setFliteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {/* to display the restaurant --- all restaurant/// filtered restaurant */}
      <div className=" flex flex-wrap justify-stretch bg-gray-100">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestaurants.map((restro) => {
            return (
              <Link to={"/restaurant/" + restro.data?.id} key={restro.data?.id}>
                {" "}
                <RestaurantCard
                  user={user}
                  {...restro.data}
                  key={restro.data?.id}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
