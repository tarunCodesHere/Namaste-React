import { restaurantList } from "../Constant";
import { RestaurantCard } from "./RestaurantCard";
const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          value=""
          className="text-input"
          type="text"
          placeholder="Search"
        ></input>
        <button className="search-btn">search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restro) => {
          return <RestaurantCard {...restro.data} key={restro.data?.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
