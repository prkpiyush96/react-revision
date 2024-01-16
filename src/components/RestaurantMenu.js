import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { costForTwoMessage, cuisines, name } =
    resInfo?.cards?.[0]?.card?.card?.info || {};
  const menuItems = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards
    ? resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards
    : resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div className="menu-container">
        {menuItems?.map((item) => {
          const { defaultPrice, description, id, imageId, name, price } =
            item?.card?.info;
          console.log(item?.card?.info);
          return (
            <div key={id} className="menu-item">
              <img
                alt="res-logo"
                className="menu-item-image"
                src={`${CDN_URL}${imageId}`}
              />
              {name} - Rs {(price || defaultPrice) / 100}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
