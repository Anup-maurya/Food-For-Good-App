import React, { useEffect } from "react";
import { ReactDOM } from "react-dom/client";
import { useState } from "react";
import {restaurantsRestAPI} from "../../Constant.js";
import RestaurantCard from "./RestaurantCard";


//What is state
//what is Hooks - JavaScript Function written by facebook developers
//What is useState

function filterData(searchText, restaurants){
     const filterData= restaurants.filter((restaurant)=> restaurant.info.name.includes(searchText));

     return filterData;
}

const Body = () => {
    
    //SearchText is a local state varaible
    const [searchText,setSearchInput]=useState(""); //To create state variable - returns =[variable name, function to update variable]
     const [restaurants,setRestaurants]=useState(restaurantsRestAPI);


     useEffect(()=>{
      console.log("render");
      getRestaurants();
     },[]);


     async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7322603&lng=83.4332587&page_type=DESKTOP_WEB_LISTING"); 
        const jsondata=await data.json();
        console.log(jsondata);
        //setRestaurants(jsondata?.data?.cards[2]?.data?.data?.cards);

        setRestaurants(jsondata?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     }
    return ( 

      <>
      <div className="search-container">
      <input type="text"
      className="search-input" placeholder="Please Use Me..." value={searchText} onChange= {(e)=>{
        //e.target.value=> whatever you write in input
        setSearchInput(e.target.value);
      
      }
        
      }/>
      <button className="search-btn" 

onClick={() => {
  // need to filter the data
  const info = filterData(searchText, restaurants);
  setRestaurants(info);
}}

     >search-{searchText.toUpperCase()}</button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
      </>
      
    );
  };

export default Body;
