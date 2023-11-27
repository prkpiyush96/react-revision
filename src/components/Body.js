import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./mockData";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  console.log(restaurantsList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter((res) => res.info.avgRating >= 4.2);
            setRestaurantsList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantsList?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
