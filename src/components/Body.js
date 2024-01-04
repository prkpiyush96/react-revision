import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "./mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9530189&lng=77.7088108');
    // const res = await data.json();
    
    setTimeout(() => {
      setRestaurantsList(restaurants);
    }, 1500);
  }

  if (restaurantsList?.length === 0) {
    return <Shimmer />
  }

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
