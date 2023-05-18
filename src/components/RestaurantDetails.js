import { useParams } from "react-router-dom";
import { img_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [displayRestaurant, menuRestaurant] = useRestaurantMenu(id);

  return !displayRestaurant && !menuRestaurant ? (
    <Shimmer />
  ) : (
    <div className="flex bg-slate-50 p-3 justify-around">
      <div>
        <h2 className="text-3xl text-center font-bold text-blue-500 pb-2">
          {displayRestaurant?.name}
        </h2>
        <img src={img_CDN_URL + displayRestaurant?.cloudinaryImageId} />
        <h3>{displayRestaurant?.areaName}</h3>
        <h3>{displayRestaurant?.city}</h3>
        <h3>{displayRestaurant?.costForTwoMessage}</h3>
      </div>
      <div className="restro-menu bg-cyan-50 px-4 hover:border-gray-500">
        <h2 className="text-center font-bold mb-1 ">MENU</h2>
        {menuRestaurant[0].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
