import { img_CDN_URL } from "../Constant";
import UserContext from "../context/userContext";
import { useContext } from "react";
//restaurant card
export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-3 m-2 bg-yellow-50  shadow-lg ">
      <img src={img_CDN_URL + cloudinaryImageId} alt="image of food"></img>
      <h3 className="text-xl font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-semibold p-1">{avgRating} ⭐ </h4>
      <h4 className="text-blue-400">{user.name}</h4>
      <h4 className="text-blue-600">{user.email}</h4>
    </div>
  );
};
