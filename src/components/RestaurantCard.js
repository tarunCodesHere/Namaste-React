import { img_CDN_URL } from "../Constant";
//restaurant card
export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={img_CDN_URL + cloudinaryImageId} alt="image of food"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
